<script>
	import { count, time, timePassed, name, greeting } from './stores.ts';
    import Crementers from './Crementers.svelte';

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);

</script>

<h1>The count is {$count}</h1>

<Crementers />

<h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been open for
	{$timePassed}
	{$timePassed === 1 ? 'second' : 'seconds'}
</p>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => $name += '!'}>
	Add exclamation mark!
</button>