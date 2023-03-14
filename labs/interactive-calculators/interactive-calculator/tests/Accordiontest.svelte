<script>
    import Accordion from 'lib/components/Accordion.svelte';
    import ask from 'src/stores/ask.js';
    import { render, fireEvent } from '@testing-library/svelte';
</script>

<!-- Accordion with your own content -->

<Accordion>
    <div>
        <h2>Accordion Title</h2>
    </div>
    <div>
        <p>Natural Language Classifier uses advanced natural language processing and
            machine learning techniques to create custom classification models. Users
            train their data and the service predicts the appropriate category for the
            inputted text.
        </p>
    </div>
</Accordion>

<!-- Accordion component standalone -->

<Accordion />
