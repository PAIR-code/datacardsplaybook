# Known Issues

## Migrating to SvelteKit version 1.0.0

SvelteKit was in pre-beta up to December 14, 2022. That means some dependencies may be vulnerable and outdated, and some features may not work as expected. We are working on updating the project to the latest version of SvelteKit and fixing our `svelte.config.js` file. If you would like to contribute, please see the [SvelteKit 1.0.0 migration guide](https://kit.svelte.dev/migrating).

## Custom stores API

Stores are like global variables and our data is dynamic (readable, writable). Currently, we have some stores that are not compatible with SvelteKit and restructuring our data. It's caused by our data flow and how our events are being dispatched. To prevent this, we need to target different type props for each store and make sure our naming conventions call each component accordingly.

We will export types and interfaces and define everything that is necessary.

Alternatively, we can bind properties of DOM element using component bindings - a prop that is writable by the child component. For more about component bindings, see [Component Bindings](https://svelte.dev/tutorial/component-bindings).

An alternative solution is using [hooks](https://kit.svelte.dev/docs/hooks) to control the server's and client hooks specific events. 

In terms of naming conventions, Svelte does not work with kebab case such as `accordion-open` which is why our current cases are `accordionOpen` Until this implemented, we can refactor the following to ensure it works accordingly. 

## Routing

The router is supposed to follow `routes/[slug]/+page.svelte` pattern. We need to fix this issue by migrating correctly with file/folder name changes looking more in `svelte.config.js` and see if it is hosted in the correct domain. 

*If there are any other issues or features you'd like to add, please add an issue and description. Thank you!*