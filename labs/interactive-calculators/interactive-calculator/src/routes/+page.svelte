<!--
 * @license
 *
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================================
-->

<!--
  * In progress. Adding custom stores and slots using special elements instead. 
  * @link Check out [Svelte Fragment](https://svelte.dev/tutorial/svelte-fragment) for more information.
-->

<script>
  import "$styles/main.scss";
  import "$routes/Ask.svelte";
  import "$routes/Inspect.svelte";
  import "$routes/error.svelte";
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
  
  import pairlogo from '$assets/pairlogo.svg';
  import sidebar from '$assets/sidebar.svg';

  import { } from '$stores/ask.js';
  import { } from '$stores/inspect.js';
</script>

<!-- Interactive Calculator Navigation -->

<div class="header">
  {Header}
</div>

<!-- Interactive Calculator Intro -->

<h1>
  The interactive calculator allows you and your team to facilitate more open collaboration when capturing and navigating tradeoffs to determine what is best for your Data Card creation process.
</h1>

<div class="visualization"> 
  <h1> Visualization </h1>

  <h4> Agent 1: {$} </h4>
  <h4> Agent 2: {$} </h4>
  <h4> Agent 3: {$} </h4>
  <h4> Agent 4: {$} </h4>
  <h4> Agent 5: {$} </h4>

</div>

<!-- Ask -->

<section>
  <div id="ask"></div>
</section>

<!-- Inspect -->

<section>
  <div id="inspect"></div>
</section>

<!-- Footer -->

<div class="bottom-bar">
  {Footer}
</div>