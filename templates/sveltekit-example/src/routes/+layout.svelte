<script lang="ts">
	import type { Snippet } from 'svelte';
	import { initSatellite } from '@junobuild/core';
	import Footer from '$lib/components/Footer.svelte';
	import Background from '$lib/components/Background.svelte';
	import '../app.css';
	import Auth from '$lib/components/Auth.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const init = async () => {
		await initSatellite({
			workers: {
				auth: true
			}
		});
	};

	$effect(() => {
		init();
	});
</script>

<div class="relative isolate min-h-[100dvh]">
	<main
		class="mx-auto max-w-(--breakpoint-2xl) py-16 px-8 md:px-24 [@media(min-height:800px)]:min-h-[calc(100dvh-128px)]"
	>
		<h1 class="dark:text-white text-5xl md:text-6xl font-bold tracking-tight md:pt-24">
			Example App
		</h1>
		<p class="dark:text-white py-4 md:max-w-lg">
			Explore this demo app built with SvelteKit, Tailwind, and
			<a href="https://juno.build" rel="noopener noreferrer" target="_blank" class="underline">
				Juno</a
			>, showcasing a practical application of these technologies.
		</p>

		<Auth>
			{@render children()}
		</Auth>
	</main>

	<Footer />

	<Background />
</div>
