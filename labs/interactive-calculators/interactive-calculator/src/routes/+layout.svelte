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

<script>
    /** @deprecated export default config */ 
    export const prerender = true;

    import Header from '$components/Header.svelte';
    import Ask from '$components/Ask.svelte';
    import Inspect from '$components/Inspect.svelte';
    import Footer from '$components/Footer.svelte';

    import '$styles/main.scss';
    import '$styles/variables.scss';
    import '$styles/viewports.scss';

    import preprocess from 'svelte-preprocess';
    import path, { dirname } from 'path';
    import { fileURLToPath } from 'url';
    import adapter from '@sveltejs/adapter-node';

    const filePath = dirname(fileURLToPath(import.meta.url))
    const sassPath = `${filePath}/src/lib/style/`

    const config = {
        // @link for more information about [preprocessors](https://github.com/sveltejs/svelte-preprocess)
        preprocess: preprocess({
            scss: {
                prependData: `@import '${sassPath}_global-imports.scss';`
            }
        }),
    }

</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>

    <div class="ask">
        <Ask />
    </div>

    <div class="inspect">
        <Inspect />
    </div>

    <Footer />
</div>

<style type="scss">
    .app {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>