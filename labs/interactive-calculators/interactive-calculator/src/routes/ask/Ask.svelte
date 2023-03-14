<script>

    import main from "$styles/main.scss";

    import { writable } from 'svelte/store'
    import { store } from '$lib/ask.js';


    import Accordion from '$components/Accordion.svelte';
    import Button from '$components/Button.svelte';
    import Chip from '$components/Chip.svelte';
    import DropdownMenu from '$components/DropdownMenu.svelte';
    import Popover from '$components/Popover.svelte';
    import RadioBinding from '$components/RadioBinding.svelte';
    import TextField from '$components/TextField.svelte';

</script>

<div class="ask">
    <slot></slot>
</div>

<!-- Ask heading -->

<section>
    <h1> 01 Ask </h1> 
    <h2> Agent Brainstorm </h2>
</section>

<!-- Ask description -->

<p>
    Rank <Popover>agents</Popover> based on relevance to dataset and data card. The output will determine everyones level. You can add up to your top 5 agents.
</p>

<!-- General skeleton  -->

<div class="ask">
    <Accordion />
</div>

