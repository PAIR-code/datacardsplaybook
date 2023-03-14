# Interactive Calculator

![](https://github.com/taylorylee/interactivecalculator/blob/main/docs/workingprototypeinteractivecalc.gif)

An interactive, collaborative activity tracker for navigating tradeoffs in data and modelling AI cards. In preproduction.

## What it does

The interactive calculator allows you and your team to facilitate more open collaboration when capturing and navigating tradeoffs to determine what’s best for your Data Card creation process

Some current features include:

- Hover explanations about data card concepts. That way, everyone involved understands technical definitions and what it means to reformulate a format in the process
- Select and add text inputs, drag and drop ratings with guiding discussion questions for agents and dimensions
- Based on your inputs, automatically see the tradeoffs in a data visualization
- Save and share your outcomes for reference and discussions as a screenshot

## Who is this tool mainly for

While it's created so that anyone from any level can get involved, it's mainly targeted towards:

- Intermediate users. This is because beginners, first-timers to the program or content in general. With intermediates, it means giving access to the core features and tools necessary to explore. 

- Workshop facilitators or faciliators in general. They establish an envionrment for participants to be effective and are responsible for running the Playbook through its course.

- Producers create the datasets and or documentation. This can include design, creation, quality testing, and documentation. Such roles include e.g., Researchers, Data Scientist, Product/Program Manager

## How it works

Check out our [Brief Process](2022-11-27-interactive-calculator-process.md) for more information.

## Getting Started

## Documentation

- [Documentation Index + API Guide](https://docs.google.com/document/d/15RUufsBCw5KHIEeyqQD_gwtATrRUVw3zBnemwopi_ew/edit?usp=sharing)
- [Design File](https://www.figma.com/file/uJ4hsh8PtcocUhltPlsFBZ/Google-Summer-of-Code-Playbooks-Lab%3A-Interactive-Calculator?node-id=0%3A1)
- FAQ (TBD)
- [Known Issues](known-issues.md)
- [Release notes](CHANGELOG.md)
- Examples (TBD)

Google specific in [Google Engineering Practices Documentation](https://google.github.io/eng-practices/): 

* [Google's Code Review Guidelines](https://google.github.io/eng-practices/review/), which are two separate sets of documents:
* [The Code Reviewer's Guide](https://google.github.io/eng-practices/review/reviewer/)
* [The Change Author's Guide](https://google.github.io/eng-practices/review/developer/)

## Want to contribute?

### Prerequisites

Npm should be preinstalled

Check the Svelte and SvelteKit document before you begin. 

[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) downloaded

If you are switching from the pre 1.0 version of SvelteKit, you will need to update your project to the latest version. See [Migrating from 1.0](https://kit.svelte.dev/migrating) for more information.

### Installation

1. Clone this repository
2. Once you've created a project and installed dependecies with `npm install`, you can start a development server: 

3. `npm run dev`

or start the server and open the app in a new browser tab

`npm run dev -- --open`

In order to create a production version, 

4. `npm run build:static:ssr`

In order to preview the production build,

5. `npm run preview`

In order update the project to the newest version, 

6. Be sure to run `npm outdated` to see if there are any outdated packages. If there are, run `npm update` to update them.

Then run `npm run update`

## License

This is part of Google PAIR Data Cards Playbook. Apache 2.0 License.

## Acknowledgments

Taylor Lee, Mahima Pushkarna (mentor), Andrew Zaldivar (mentor)

### Special thanks

Vivian Tsai

## Disclaimer

This is not an official Google product.

Interactive Calculator is under active development by a small team. We'd love your help with bugs, feature requests, and suggestions: please don't hesitate to open a new issue.

## Additional info

Want to see a different version of interactive calculator? Check out [spreadsheet](assets/activitytracker.xlsx)

Have any feedback or suggestions? Made something using the interactive calculator? We want to hear from you! Leave notes, feedback, or suggestions on our GitHub. Use #datacardsplaybook #interactivecalculator
