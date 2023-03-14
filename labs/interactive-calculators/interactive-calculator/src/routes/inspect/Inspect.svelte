<!-- Inspect Layout to connect to layout.  Includes all the components for the Inspect Section -->

<script>
    import "styles/main.scss";

    import Accordion from '$lib/components/Accordion.svelte';
    import DropdownMenu from '$lib/components/DropdownMenu.svelte';
    import Popover from '$lib/components/Popover.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<div class="inspect">
    <slot></slot>
</div>

<!-- Inspect heading -->

<h1> 02 Inspect </h1>
<h2> Dimensions </h2>

<!-- General skeleton  -->

<div class="inspect">     
    <div id="accountabiliy">
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
    </div>

    <div id="impact-and-consequences">
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
    </div>

    <div id="quality">
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
    </div>

    <div id="risk-and-recommendations">
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
    </div>
        
    <div id="use-and-utility">
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
    </div>
</div>
