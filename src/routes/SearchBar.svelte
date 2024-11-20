<script lang="ts">
	import '../app.pcss';
	import * as Command from '$lib/components/ui/command';
	import MyCommandInput from './mycomponents/mycommand-input.svelte';
	import { onMount } from 'svelte';
	import { fetchSearchResults } from './myapi';
	import type { PackageSearchResponse } from './api';
	import { trapFocus } from './actions.svelte.ts';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCircleXmark } from '@fortawesome/pro-solid-svg-icons';
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

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
	let results: string[] = [];
	let loading = false;
	let error = null;
	let focusIndex = -1;
	let activeSection = 'search';

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
			// console.log('Autocomplete Results:', results);
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

	function handleKeydownAction(event: KeyboardEvent, action: () => void) {
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

        // Navigate within the current section
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();

            // Get items only within the current active section
            const sectionItems =
                activeSection === 'recent'
                    ? document.querySelectorAll('.recent-item')
                    : activeSection === 'popular'
                    ? document.querySelectorAll('.popular-item')
                    : document.querySelectorAll('.search-item');

            if (sectionItems.length === 0) return;

            // Remove focus class from all items in the section
            sectionItems.forEach((item) => item.classList.remove('is-focused'));

            // Update focusIndex within the current section
            if (e.key === 'ArrowDown') {
                focusIndex = (focusIndex + 1) % sectionItems.length;
            } else if (e.key === 'ArrowUp') {
                focusIndex = (focusIndex - 1 + sectionItems.length) % sectionItems.length;
            }

            // Add focus class to the new item and programmatically focus it
            const focusedItem = sectionItems[focusIndex];
            focusedItem?.classList.add('is-focused');
            (focusedItem as HTMLElement)?.focus();
            focusedItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Switch between sections with ArrowLeft and ArrowRight
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();

            // Update the active section based on arrow keys
            if (e.key === 'ArrowRight') {
                if (activeSection === 'recent') {
                    activeSection = 'search';
                } else if (activeSection === 'popular') {
                    activeSection = 'recent';
                } else if (activeSection === 'search') {
                    activeSection = 'popular';
                }
            } else if (e.key === 'ArrowLeft') {
                if (activeSection === 'search') {
                    activeSection = 'recent';
                } else if (activeSection === 'recent') {
                    activeSection = 'popular';
                } else if (activeSection === 'popular') {
                    activeSection = 'search';
                }
            }

            // Focus the first item in the newly activated section
            const sectionItems =
                activeSection === 'recent'
                    ? document.querySelectorAll('.recent-item')
                    : activeSection === 'popular'
                    ? document.querySelectorAll('.popular-item')
                    : document.querySelectorAll('.search-item');

            focusIndex = 0; // Reset focus index for the new section
            sectionItems.forEach((item) => item.classList.remove('is-focused')); // Remove focus class from all items
            sectionItems[focusIndex]?.classList.add('is-focused'); // Add focus class to the first item
            (sectionItems[focusIndex] as HTMLElement)?.focus(); // Programmatically focus the item
        }


		}

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<button on:click={() => (open = !open)}>Open</button>
<!-- <div use:trapFocus class=""> -->
	<Command.Dialog bind:open class="w-[720px] max-h-[580px] bg-gray-500" >
		<div class="flex items-center" >
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
			<!-- random whitespace -->
			<div class=" h-full flex justify-center">
				<button
					on:click={performSearch}
                    on:keydown={(e) => handleKeydownAction(e as unknown as KeyboardEvent, handleClear)}
					class="bg-white cursor-pointer my-4 mr-4 ml-2 rounded-lg px-6 py-1 font-semibold">Cancel</button
				>
			</div>
		</div>
		<Command.List class=" bg-blue-300 max-h-[436px] overflow-hidden focus:ring">
				<div class="w-100 flex items-center">
				    <div class="flex-col" >
						<div  class="h-[218px] w-[240px] border-b-2 pl-4 py-2">
							<span class="text-xs">
								RECENT SEARCH
							</span>
							<button tabindex={0} class="command.item recent-item text-sm focus:ring">Biology of human body</button>
						</div>

					<!-- <Command.Separator class="" /> -->

						<div class="h-[218px] w-[240px] pl-4 py-2">
							<span class="text-xs">
								POPULAR SEARCH
							</span>
						<Command.Item tabindex={0} class="command.item popular-item"><span>Human Body</span></Command.Item>
						<Command.Item tabindex={0} class="command.item popular-item"><span>Blood cells</span></Command.Item>
						<Command.Item tabindex={0} class="command.item popular-item"><span>Skeleton</span></Command.Item>
						<Command.Item tabindex={0} class="command.item popular-item"><span>Human heart - animation</span></Command.Item>
						<Command.Item tabindex={0} class="command.item popular-item"><span>Influenza (flu) virion</span></Command.Item>
						</div>
					</div>
					<!-- <Separator orientation="vertical" class=""/> -->
					
					<div class="">
						<div class="flex flex-col w-[477px] h-[436px] border-l-2 pl-4 py-3">
							<span class="text-xs">
								SEARCH RESULT
							</span>
						<ScrollArea>
						{#each results as result}
							<Command.Item
							tabindex={0}
							class="command-item search-item hover:bg-teal-600 focus:bg-teal-600" 
							>
							{result}
							</Command.Item>
						{/each}
						</ScrollArea>
						</div>
					</div>
				</div>
			  </Command.List>
			  <div class="flex justify-center">
				<button class="w-[156px] h-[40px] px-4 py-1 bg-black text-white justify-center rounded-lg my-4 text-sm" >
					Show all results
				</button>
			  </div>
	</Command.Dialog>
<!-- </div> -->

