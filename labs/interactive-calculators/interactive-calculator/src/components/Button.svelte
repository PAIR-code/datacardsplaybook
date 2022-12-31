<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>
    /** @protected @const {!save-button} */
    const savebutton = document.querySelector (
        ".savebutton"
    )

    export const button = '';
 
    import RadioBinding from '$components/RadioBinding.svelte';
    import Dropdown from '$components/Dropdown.svelte';
    import Popover from '$components/Popover.svelte';

    let dropdownOpen = false // default state

    const dropdownClick = () => {
    dropdownOpen = !dropdownOpen
    } //toggle state when it's clicked


    const addButton = () => {
    dispatch('addButton', accordion)
    accordion = ''
  }

</script>

<!-- Add Button -->

<div class="AddButton">
    <Button on:click = {button}
    >
      <div class="addAsk">
          <button on:click = {addAsk}>
            <img src="/assets/addask.svg" class="ask" alt="Add Ask Button" />
      </div>
      <div class="addInspect">
          <img src="/assets/addinspect.svg" class="inspect" alt="Add Inspect Button">
      </div>
      <div class="addInactive">
        <img src="/assets/addinactive.svg" class="inactive" alt="Add Inactive Button">
      </div>
    </Button>
  </div>


<!-- Save Button. -->

<button on:click={save} class="SaveButton" img src="/assets/save.svg" alt="Save Button Icon"> 
    Save
</button>

<!-- Share Button. Mail -->

<button on:click={share} class="ShareButton" img src="/assets/mail.svg" alt="Email Icon">
    <a href="mailto: abc@example.com?subject = Interactive Calculator Results">
    Email
    </a>
</button>

<!-- Dropdown button -->

<div class="Dropdown">
    <button on:click={dropdownClick} class="DropdownButton">
        <img src="/assets/dropdownup.svg" alt="Dropdown Up Icon">
    </button>

    {#if dropdownOpen}
        <img src="/assets/dropdowndown.svg" alt="Dropdown Down Icon">
    {/if}
</div>
