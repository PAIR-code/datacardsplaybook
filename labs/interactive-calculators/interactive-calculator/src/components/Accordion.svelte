<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>
  import main from 'styles/main.scss';
  import { writable, derived} from 'svelte/store';
  import { asDropZone } from 'svelte-drag-and-drop-actions'
  import { select_value } from 'svelte/internal';

  import Button from '$components/Button.svelte';
  import Chip from '$components/Chip.svelte';
  import RadioBinding from '$components/RadioBinding.svelte';
  import TextField from '$components/TextField.svelte';
  import DragDropTouch  from 'svelte-drag-drop-touch';

  import add from '$assets/add.svg';
  import addinspect from '$assets/addinspect.svg';
  import addask from '$assets/addask.svg';
  import dropdowndownarrow from '$assets/dropdowndownarrow.svg';
  import dropdownuparrow from '$assets/dropdownuparrow.svg';
  import dropdowndown from '$assets/dropodowndown.svg';
  
  export const accordion = writable([]);

  $: role = $role; 
  $: datafluency = $datafluency; 
  $: domainexpertise = $domainexpertise;
  
  let AccordionOpen = true; 

  function AccordionOpen() {
    AccordionOpen = !AccordionOpen; 
  }


</script>

<!-- We use <slot> element, so components can accept any children that uses new content-->

<div class="Accordion">
  <slot></slot>
</div>

<div class="AccordionOpen">
  <slot></slot>
</div>

<div class="AccordionClosed">
  <slot></slot>
</div>

<div class="AddButton">
  <slot></slot>
</div>

<!-- Able to drag and drop according to the coords point, which can be changed based on where it's placed -->

<Accordion>
  <header>{sectionTitle}</header>
  <div class="drag-drop"
    use:pannable
    on:pan-start={handlePanStart}
    on:pan-move={handlePanMove}
    on:pan-end={handlePanEnd}
    style= "translate({$coords.x}px,{$coords.y}px)
		rotate({$coords.x * 0.2}deg)"
  >
</div>
</Accordion>

<!-- Adding new agent accordion inactive state using event modifier -->

<Accordion>
  <header>{sectionTitle}</header>
  <agent>{agentId} </agent>
  <addbutton on:click|once={AddButton}>Add</addbutton>
  <dropdowndown on:click|once={dropdowndown}></dropdowndown>
</Accordion>

<!-- When accordion is open, all the necessary components and stored data pass inside -->

<AccordionOpen>
  <header>{sectionTitle}</header>
  {#if open}
    <!-- </dropdownup> Inherit dropdown up button component -->
    <dropdownup on:click|once={dropdownup}></dropdownup>
  <span slot="agentId">
    {id}
  </span>
  <button slot ="accordionInfo">
    <p> {content} </p>
  </button>
  {/if}
</AccordionOpen>

<AccordionClose>
  <dropdowndown on:click|once={dropdowndown}></dropdowndown>
  <div slot="accordionInfo">
    <p> 
      {id}
    </p>
    <input type ="role" bind:value={TextField}>
    <input type ="RadioBinding" bind:value={RadioBinding}>
    <input type ="additionalInfo" bind:value={TextField}>
  </div>
  <span slot="chip">
    {$role}
    {$datafluency}
    {$domainexpertise}
  </span>
</AccordionClose>

<style lang="scss">

  .accordion {
    display: block;
    column-gap: 1.25rem;
    padding-bottom: #{$y-padding};
    grid-row-gap: 1.25rem;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }

  .accordionOpen {
    display: block;
    position: absolute;
    left: 100%
  }

  .accordionClose {
    display: block;
    position: absolute;
    left: 100%;
    --webkit-appearance: none; 
    z-index: #{$z-index-close-nav};
  }

</style>