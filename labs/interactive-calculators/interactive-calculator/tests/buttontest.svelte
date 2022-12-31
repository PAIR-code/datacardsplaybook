<script>
    import { Button, dropdownUp, addButton } from 'src/lib/components/Button.svelte';
    import { render, fireEvent } from '@testing-library/svelte';

// Save button
function save() {
    window.print();
}

savebutton.addEventListener("click", save);

</script>

<!-- Dropdown button -->

{dropdownUp}
<Button />

<!-- Add button -->

{addButton}
<Button />
