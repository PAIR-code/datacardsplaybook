<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script> 
  import main from 'styles/main.scss';
  import pairlogo from 'src/assets/pairlogo.svg';
  import mail from 'src/assets/mail.svg';
  import youtube from 'src/assets/youtube.svg';
  import ccbysa from 'src/assets/ccbysa.svg';
  import medium from 'src/assets/medium.svg';
</script>

<!-- Footer -->

<slot name="footer"></slot>

<footer>
<div class="bottom-bar">
  <div class="bottom-links">
    <p> Have any feedback or suggestions? Made something using the interactive calculator? We want to hear from you! Leave notes, feedback, or suggestions on our GitHub. Use #datacardsplaybook #interactivecalculator </p>
    <p> Created during Google Summer of Code 2022 </p>
    <p> All rights reserved. Copyright (c) 2022 Google PAIR</p>
    <img src={ccbysa} alt="CC by SA Copyright"/>
    <a class="link" href="https://pair.withgoogle.com/" rel="noopener noreferrer"><img src="src/assets/pairlogo.svg" alt="Pair Logo"/></a>
    <a class="link" href="https://research.google/teams/language/" rel="noopener noreferrer"><p>Google Research</p></a>
    <a class="link" href="https://github.com/pair-code/datacardsplaybook" rel="noopener noreferrer"><p>GitHub</p></a>
  </div>
</div>
</footer>

<style lang="scss">

  footer {
    margin-top: #{$y-padding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: #{$footer-min-height};
  }

  footer, .footnote p {
    font-size: 0.8125rem;
    line-height: 1.25rem;
    margin-bottom: 0.625rem;
  }
</style>