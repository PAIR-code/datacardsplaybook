<!-- 
    * Fallback error. Returns 404 page when a route or store is not found, so that it renders response status code.
    * @link [Error page](https://kit.svelte.dev/docs/routing#error) 
-->

<script>
    import { page } from '$/routes';
    import { ask } from '$/stores';
    import { inspect } from '$/stores';
</script>

<!--
    * Page status is not necessary but is added to set expectations for users and more. Page error message is necessary to render the message.
-->

<h1>{$page.status}: {$page.error.message}</h1>

<p>404. That's an error. </p>
<p> The requested URL was not found on this server. </p>
<p> In the meantime, use the spreadsheet found on the README and check out other tools and guidebook on Playbooks Labs. </p>