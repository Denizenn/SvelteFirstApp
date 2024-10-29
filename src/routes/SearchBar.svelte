<script lang="ts">
	import '../app.pcss';
	import * as Command from '$lib/components/ui/command';
	import MyCommandInput from './mycomponents/mycommand-input.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import { fetchSearchResults } from './myapi';
	import type { PackageSearchResponse } from './api';
	import { trapFocus } from './actions.svelte.ts';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCircleXmark } from '@fortawesome/pro-solid-svg-icons';

    // 

	const fakeData = [
		'Introduction to auto Biology',
		'Human auto Anatomy 101',
		'Cell auto Biology Basics',
		'Advanced auto Molecular Biology',
		'Genetics auto and Evolution',
		'Biology auto of the Human Brain',
		'Plant auto Biology Essentials',
		'Microbial auto Biology',
		'Marine auto Biology',
		'ZAJEBEM auto',
		'TENTO auto',
		'SKURVENY auto',
		'SHADCN auto',
		'DEVELOPER auto',
		'TY auto',
		'KOKOT auto'
	];

	let open = true;
	let searchText = '';
	let results: any[] = [];
	let loading = false;
	let error = null;
	let selectedItem = '';

	async function performSearch() {
		if (searchText.length === 0) {
			results = [];
			return;
		}

		loading = true;
		error = null;
		try {
			results = fakeData.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
			// const response = await fetchSearchResults(searchText);
			// const data: PackageSearchResponse = response.data;
			// results = data.autocomplete || [];
			// console.log("Search Results:", data);
			console.log('Autocomplete Results:', results);
		} catch (err) {
			console.error(err);
			error = (err as Error).message || 'Failed to fetch results.';
		} finally {
			loading = false;
		}
	}

	function handleSearchInput(event: Event) {
		searchText = (event.target as HTMLInputElement).value;
	}

	function handleClear() {
		searchText = '';
		results = [];
	}

	function handleKeydownAction(event: KeyboardEvent, action: Function) {
		if (event.key === 'Enter') {
            event.preventDefault();
			action();
		}
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<button on:click={() => (open = !open)}>Open</button>
<div use:trapFocus>
	<Command.Dialog bind:open class="">
		<div class="flex items-center">
			<MyCommandInput
				placeholder="Type a command or search..."
				on:input={handleSearchInput}
				bind:value={searchText}
                handleKeydownAction={(e) => handleKeydownAction(e, performSearch)}
			>
				<Button
					on:click={handleClear}
					class="ml-2"
					variant="ghost"
					on:keydown={(e) => handleKeydownAction(e as unknown as KeyboardEvent, handleClear)}
				>
					<FontAwesomeIcon icon={faCircleXmark} class="h-5 w-5" />
				</Button>
			</MyCommandInput>
			<div class="bg-gray-600 h-full flex justify-center">
				<button
					on:click={performSearch}
                    on:keydown={(e) => handleKeydownAction(e as unknown as KeyboardEvent, handleClear)}
					class="bg-white cursor-pointer my-5 mr-4 ml-1 rounded-md px-6 font-semibold">Clear</button
				>
			</div>
		</div>
		<Command.List class="bg-blue-300">
			{#if loading}
				<Command.Empty>Loading...</Command.Empty>
			{:else if results.length === 0}
				<Command.Empty>No results found.</Command.Empty>
			{:else}
				<Command.Group heading="Search Results">
					{#each results as result}
						<Command.Item tabindex={0} class="custom-item bg-red-200 hover:bg-teal-600 focus:bg-teal-600"
							>{result}</Command.Item
						>
					{/each}
				</Command.Group>
			{/if}
		</Command.List>
	</Command.Dialog>
</div>

