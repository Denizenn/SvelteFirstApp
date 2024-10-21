<script lang="ts">

	import Inner from './Inner.svelte';

	function handleMessage(event: CustomEvent) {
		alert(event.detail.text);
	}

    import Nested from './Nested.svelte';

    let name = 'Svelte'
    let string = `this string contains some <strong>HTML!!!</strong>`;

    let count = 0;
    $: doubled = count * 2;

    $: {
		console.log(`the count is ${count}`);
		console.log(`this will also be logged whenever count changes`);
	}

    $: if (count >= 10) {
		alert('count is dangerously high!')
		count = 0;
	}

	function increment() {
		count += 1;
	}

    let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};

	import Buttons from './Buttons.svelte';

	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}

	import { getRandomNumber } from '../lib/utils';

	let promise = getRandomNumber();

	function handleRandomClick() {
		promise = getRandomNumber();
	}

	import PointerMove from './PointerMove.svelte';
	import Bindings from './Bindings.svelte';
	import Lifecycle from './Lifecycle.svelte';
	import StoreShopping from './StoreShopping.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Spring from './Spring.svelte';
	import Transitions from './Transitions.svelte';
	

</script>



<h1>Welcome to {name.toUpperCase()}</h1>
<Inner on:message={handleMessage} />

<p>{@html string}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
{#if count > 5}
	<p>{count} is greater than 5</p>
{:else if count < 3}
	<p>{count} is less than 3</p>
{:else}
	<p>{count} is between 4 and 6</p>
{/if}

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<Nested answear={42} />
<Nested />

<PackageInfo
	{...pkg}
/>

<!-- <PackageInfo
	name={pkg.name}
	speed={pkg.speed}
	version={pkg.version}
	website={pkg.website}
/> -->

<Buttons />

<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<!-- Button can have modifiers once, self, trusted... -->
<button on:click={handleRandomClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number} 
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<PointerMove />
<Bindings />
<Lifecycle />
<StoreShopping />
<ProgressBar />
<Spring />
<div ></div>
<Transitions />
