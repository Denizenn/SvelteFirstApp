import { writable, readable, derived } from 'svelte/store';

export const count = writable(0);

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const timePassed = derived(
	time,
	($time) => Math.round(($time.getTime() - start.getTime()) / 1000)
);

export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}!`);