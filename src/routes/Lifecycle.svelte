<script>
	import { paint } from './gradient.ts';
	import {onMount } from 'svelte';

	onMount(() => {
		const canvas = document.querySelector('canvas');
		if (!canvas) return;
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			if (context) {
				paint(context, t);
			}
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas
	width={32}
	height={32}
></canvas>

<style>
	canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>
