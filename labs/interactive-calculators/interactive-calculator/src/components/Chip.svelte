<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>

	import '$styles/main.scss';
	import Accordion from '$components/Accordion.svelte';

    import { getContext } from 'svelte';
    import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const storedValue = writable(value);
	setContext('chip', {storedValue, index: 0});
	
	storedValue.subscribe(v => value = v);
	$: storedValue.set(value);

	export let value = 0;

</script>

<!--
	chip data object passed in as a prop
-->

<Chip bind:value>
	Accordion.set({value})
</Chip>

<style lang="scss">
	.#{chip} {
		display: incline; 
		padding:1.24rem;
		position: relative; 
		right: 100%
	}
</style>