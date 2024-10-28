<script lang="ts">
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	let content = 'Hello!';

	/**
	 * @param {HTMLElement} node
	 * @param {Object} options
	 */
	function tooltip(node: HTMLElement, options: any) {
		const tooltip = tippy(node, options);

		return {
			update(options: any) {
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
	}

	let html = '<p>Write some text!</p>';


	let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

	function add() {
		todos = todos.concat({
			done: false,
			text: ''
		});
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;

	let w;
	let h;
	let size = 42;
	let text = 'edit this text';

</script>

<input bind:value={content} />

<button use:tooltip={{ content, theme: 'material' }}>
	Hover me
</button>


<div bind:innerHTML={html} contenteditable></div>

<pre>{html}</pre>


<div class="centered">
	<h1>todos</h1>

	<ul class="todos">
		{#each todos as todo}
			<li class:done={todo.done}>
				<input
					type="checkbox"
					bind:checked={todo.done}
				/>

				<input
					type="text"
					placeholder="What needs to be done?"
					bind:value={todo.text}
				/>
			</li>
		{/each}
	</ul>

	<p>{remaining} remaining</p>

	<button on:click={add}>
		Add new
	</button>

	<button on:click={clear}>
		Clear completed
	</button>
</div>

<label>
	<input type="range" bind:value={size} min="10" max="100" />
	font size ({size}px)
</label>

<div bind:clientWidth={w} bind:clientHeight={h} class="dimensions">
	<span style="font-size: {size}px" contenteditable>{text}</span>
	<span class="size">{w} x {h}px</span>
</div>

<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}

	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.done {
		opacity: 0.4;
	}

	li {
		display: flex;
	}

	input[type="text"] {
		flex: 1;
		padding: 0.5em;
		margin: -0.2em 0;
		border: none;
	}


	.dimensions {
		position: relative;
		display: inline-block;
		padding: 0.5rem;
		background: hsla(15, 100%, 50%, 0.1);
		border: 1px solid hsl(15, 100%, 50%);
	}

	.size {
		position: absolute;
		right: -1px;
		bottom: -1.4em;
		line-height: 1;
		background: hsl(15, 100%, 50%);
		color: white;
		padding: 0.2em 0.5em;
		white-space: pre;
	}
</style>