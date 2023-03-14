<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<!--
    Reference: https://svelte.dev/tutorial/group-inputs-
-->

<script> 

  export let id = [];
  export let option = [];
  export let disabled = false; 
  export let label = "";
  export let value = undefined; 
  //export let value = option.length ? option[0].value : "";
  export let description = undefined;
  import 'styles';

  export let selected = true;
  export let dataFluencyLevel = '';
  export let options = '';


  //const id = `select-${Math.floor(Math.random() * 1000000)}`;
  export const RadioBinding;

  //

  export function onChange(event) {
    selected = event.currentTarget.value;
  }

  // TODO: Adding how the values will change the output

</script>

<!-- Selecting content -->

<div class="select">
  {#if label}
    <label for={id}>{label}{description}</label>
  {/if}
  <select {id} bind:radio-value= {disabled}>
    {#each options as option}
      <option>{option.label || option.value || description.label}</option>
    {/each}
  </select>
</div>

<!-- If adding content here, then a structure -->
<!-- TODO: Adding the h1, h3, and paragraph inside the radio binding form-->

<h3>{title}</h3>
<p>{description}</p>

<label for="{id}">{description}</label>
<input bind:group {dataFluencyLevel} type="radio" id="" value="">

<label for="{id}">{description}</label>
<input bind:group {dataFluencyLevel} type="radio" id="" value="">

<label for="{id}">{description}</label>
<input bind:group {dataFluencyLevel} type="radio" id="" value="">

<label for="{id}">{description}</label>
<input bind:group {dataFluencyLevel} type="radio" id="" value="">

<label for="{id}">{description}</label>
<input bind:group {dataFluencyLevel} type="radio" id="" value="">




<!--
{#if label}
  <label for={id}>{label}{description}</label>
 
{: else if }
  <radio bind label="Heading"></radio>
  <option value="Description"Description</option>

  <radio bind: radio-value={1}>Selection 1</radio>
{:else}
  <radio bind: radio-value={2}>Selection 2</radio>
{:else if }
  <radio bind: radio-value={3}>Selection 3</radio>
{:else if }
  <radio bind: radio-value={4}>Selection 4</radio>
{:else if }
  <radio bind: radio-value={5}>Selection 5</radio>
{/if} 
  -->

{#each questions as options}
  <h1>{id.title}</h1>
  <h3>{id.description}</h3>
  <label>
    <input type="radio" bind:group{questions} name="" value={questions}>
    {id.options}
  </label> 
{/each}

<!--
<label for={id}>{label}{description}>
	<input checked={selected===value} on:change={onChange} type="radio" name="amount" value={id.value} /> {id.description}
</label>
<label>
	<input checked={selected===value} on:change={onChange} type="radio" name="amount" value={id.value} /> 20
</label>
<label>
	<input checked={selected===value} on:change={onChange} type="radio" name="amount" value={id.value} /> 30
</label>
<label>
	<input checked={selected===value} on:change={onChange} type="radio" name="amount" value={id.value} /> 30
</label>
<label>
	<input checked={selected===value} on:change={onChange} type="radio" name="amount" value={id.value} /> 30
</label>
-->

<style lang="scss">

.unselected {
  background-color: #fff; 
  border: 1.55383px solid;
  border-color: #{$ask-bright};
}

.unselected:focus {
  background-color: #{$ask-light}; 
  border: 1.55383px solid;
  border-color: #{$ask-bright};
}

/*.unselected:disabled {

}*/

.selected {
  background-color: #{$ask-light}; 
  border: 1.55383px solid;
  border-color: #{$ask-bright};

  width: 7.77px;
  height: 7.77px;
  background-color: #{$ask-bright};
}

/*.selected:focus {

}

.selected:disabled {

}/*


/* 
theming for ask and inspeect elements https://web.dev/learn/design/theming/

prefers-color-scheme: 


*/


</style>


