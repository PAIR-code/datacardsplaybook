<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>
    export let sidebar = false;
</script>

<button on:click={() => sidebar = !sidebar}>Toggle Sidebar</button>

{#if sidebar}
    <div class="sidebar">
        <a href="/Ask.svelte">01 Ask</a>
        <a href="/Inspect.svelte">02 Inspect</a>
        <a href=https://github.com/PAIR-code/datacardsplaybook">Get Involved</a>
    </div>
{/if}

<!-- Sidebar -->

<style lang="scss">

nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-left: 1px solid #aaa;
    background: $concrete-100;
    overflow-y: auto;
    width: 10rem;   
}

</style>
