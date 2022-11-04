# Card Builder

Card Builder is a lightweight tool
that converts dataset documentation into a structured Data Card.

[View Card Builder](https://pair-code.github.io/datacardsplaybook/labs#card-builder)

## How it works
### Formatting
First, format your content in Markdown as follows:

- `h1`: Title of card
- `h2`: Title of section within card
- `h3`: Title of subsection within section
- `h4`: Title of field within section

[View example Markdown content](./examples/input.md)

### Parsing
The tool will use these headings to reorganize content into
a nested Card structure:

- Card
  - Title of card
  - Summary text (after title, but before first section)
  - Section within card
    - Title of section
    - Section text
    - Subsection within section
      - Title of subsection
      - Subsection text
      - Field within subsection
        - Title of field
        - Field text

This step uses [micromark](https://github.com/micromark/micromark)
to create an initial syntax tree, which is then restructured into the card.

### Converting
The card structure can then be exported to the following formats:

- HTML

## Using the tool
Card Builder is available as a text editor on the
[Data Cards Playbook website](https://pair-code.github.io/datacardsplaybook/labs#card-builder).

## Local development
Use `npm run build` or `yarn run build` to compile the following files
in the `dist` directory:

- `card-builder.js`: Script that creates and exports cards
- `card-interactions.js`: Script for card interactions
- `card-default.css`: CSS styles used in the Card Builder text editor

To convert your card from Markdown to HTML:

```
const markdown = "# Card Title\nMarkdown content";
CardBuilder.markdownToHTMLCard(markdown);
```

## Disclaimer
This is not an official Google product.

Card Builder is under active development by a small team.
We'd love your help with bugs, feature requests, and suggestions:
please don't hesitate to
[open a new issue](https://github.com/pair-code/datacardsplaybook/issues).
