<script lang="ts">
	import { fade, fly } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing';
	let visible = true;

	function spin(node: HTMLElement, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}

	function typewriter(node: HTMLElement, { speed = 1 }: { speed: number }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		if (!text) {
			throw new Error('Text content is null');
		}
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

    let status = 'waiting...';


    import { slide } from 'svelte/transition';

	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    import { messages } from './loading-messages';
	import { onMount } from 'svelte';

    let j = -1;

	onMount(() => {
		const interval = setInterval(() => {
			j += 1;
			j %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}
{#if visible}
	<p transition:fly={{ y: 200, duration: 2000 }}>
		Flies in and out
	</p>
{/if}

{#if visible}
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>
		Flies in, fades out
	</p>
{/if}

{#if visible}
	<div
		class="centered"
		in:spin={{ duration: 8000 }}
		out:fade
	>
		<span>transitions!</span>
	</div>
{/if}

{#if visible}
	<p transition:typewriter={{ speed: 1 }}>
		The quick brown fox jumps over the lazy dog
	</p>
{/if}


<p>status: {status}</p>
{#if visible}
	<p
		transition:fly={{ y: 200, duration: 2000 }}
		on:introstart={() => status = 'intro started'}
		on:outrostart={() => status = 'outro started'}
		on:introend={() => status = 'intro ended'}
		on:outroend={() => status = 'outro ended'}
	>
		Flies in and out
	</p>
{/if}


<label>
	<input type="range" bind:value={i} max="10" />
</label>

{#if visible}
	{#each items.slice(0, i) as item}
		<div transition:slide|global>
			{item}
		</div>
	{/each}
{/if}


<h1>loading...</h1>

{#key j}
<p in:typewriter={{ speed: 10 }}>
	{messages[j] || ''}
</p>
{/key}

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}

    div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>