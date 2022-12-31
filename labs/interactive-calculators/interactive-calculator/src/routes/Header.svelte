<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<!-- Navigation Bar, Top Bar -->

<script>
  import sidebar from 'assets/sidebar.svg'; 
  import main from 'styles/main.scss';
  import favicon from 'assets/favicon.ico';
</script>

<header>
  <div class="corner">
    <a href="favicon">
      <img src={favicon} alt="Interactive Calculator"/>
    </a>
  </div>
  
  <nav>
    <a href="/assets/sidebar.svg">sidebar</a>
    <a href="/ask">Ask</a>
    <a href="/inspect">Inspect</a>
    <a href="https://github.com/PAIR-code/datacardsplaybook" alt="Github">Get Involved</a>
  </nav>
</header>

<style lang="scss">
  .nav {
    display: none;
    position: relative;
    background: $concrete-100;
    box-shadow: $header-shadow;
    z-index: $z-index-nav;
    padding-bottom: 1.25rem;
    visibility: collapse;
  }

  .nav ul {
    margin: 0rem;
    color: $tornado-500;
    padding-right: $x-padding;
  }

  .nav li {
    list-style: none;
    line-height: $header-height / 3;
    padding: 0.625rem 0rem 0.625rem 1.25rem;
    margin: 0rem;
    font-size: 0.875rem;
    font-family: $title-font;
    text-transform: uppercase;
  }

  .nav li a {
    color: $tornado-400;
  }

  .nav li a:hover, .nav li a:focus {
    color: $overall-bright;
    background: none;
  }

  .nav li a.active {
    color: $overall-bright;
    background: none;
  }

  .nav li a svg.arrow {
    fill: $tornado-400;
  }

  .nav li a:hover svg.arrow, .nav li a:focus svg.arrow {
    fill: $overall-bright;
  }

  .nav-icon {
    cursor: pointer;
    float: left;
    margin: $header-height / 3 0rem $header-height / 3 0rem;
    padding-left: $x-padding;
  }
</style>
