<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<!--
REFERENCE: https://svelte.dev/examples/textarea-inputs
-->


<script>
    import main from '$styles/main.scss';

	import { marked } from 'marked';
	let additionalinfo = '';
    let roleinfo = '';
    let textfield = '';
</script>

<textarea bind:value={additionalinfo} placeholder="Add links or notes from the persona worksheet for reference..."></textarea>
<textarea bind:value={roleinfo} placeholder="Enter your role..."></textarea>

{@html marked(text)}

<p>{textfield}</p>


<!-- Outlined textfield -->

<style lang="scss">
	textfield { 
        background: $concrete-100;
        border: 0.776917px solid #C3CAD1;
        border-radius: 1.55383px;
        display: grid; /* Using grid instead since it's content-first */
        flex-direction: column;
        align-items: flex-start;
        padding: 3.88459px 9.32301px;
        width: 100%; 
        height: 200px; 
        }
</style>
