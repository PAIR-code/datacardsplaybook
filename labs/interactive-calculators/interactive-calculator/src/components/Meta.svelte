<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<!-- 
    Reference: https://kit.svelte.dev/docs/seo and https://ogp.me/
-->

<script>
    import { page } from $'stores';
    const { title, description } = copy;
    //const url = ${page.data};
    const url = `${base}${$page.url.pathname}`;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="" />

    <meta property="og:title" content={title} />
    <meta property="og:site_name" content="Interactive Calculator" />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="calculator" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

