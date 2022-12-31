<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>
    import main from '/main.scss';

    
    const dimensionsRating [
        {
            value: '1',
            label: 'Poor',
            description: '',
            group: ''
        },
        {
            value: '2',
            label: 'Borderline',
            description: '',
            group: ''
        },
        {
            value: '3',
            label: 'Average',
            description: '',
            group: ''
        },
        {
            value: '4',
            label: 'Solid',
            description: '',
            group: ''
        },
        {
            value: '5',
            label: 'Outstanding',
            description: '',
            group: ''
        }
    ];

    

	// export let props

    export let options = [];
    export let selected = undefined; 

</script>

<!-- Heading, write any necessary comments about what it does and why -->


<div class ="dropdownmenu">
    <Button on:click={() => {() => menuOpen = !menuOpen} {menuOpen} />

// Dummy code for now
    {#if menuOpen}
        <div class=:show={menuOpen} class="dropdownmenucontent">
            {#each options as option}
                <div class="dropdownmenu__option" on:click={() => {() => selected = option} {selected} />
            {/each}
        </div>
    {/if}
</div>

<!-- Specific style for component. Otherwise, in main.scss -->

<style lang="scss">

    .dropdownmenu {
        position: relative;
        display: inline-block;
    }

    .dropdownmenucontent {
        display: none;
        position: absolute;
        min-width: 230px;
        border:1px solid $color-grey-300;
        z-index: 1;
    }

    .show {
        display:block;
    }
    
</style>