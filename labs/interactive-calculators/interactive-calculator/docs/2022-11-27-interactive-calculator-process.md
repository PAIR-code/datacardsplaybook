---
template: //
title: The Making of the Interactive Calculator: It’s Not Just the AI; It’s the People Who Own It
socialsummary: A tool is as good as how it is built and being used, we need unique perspectives and guidelines. Interactive calculator navigates tradeoffs in data and modeling cards. 
shareimg: //
permalink: //
---

# The Making of the Interactive Calculator: It’s Not Just the AI; It’s the People Who Own It
By Taylor Lee
Mentors: Mahima Pushkarna, Andrew Zaldivar

*This is a short process overview and a personal experience piece written during Google Summer of Code 2022*

Let’s pause for a moment. What are we building?

It’s such a simple question, yet one that could use more reflection. 

A tool is as good as the person using it and how it has been built. That’s why when we look into data cards and decipher what goes inside a machine and who is responsible for a particular area, we can truly improve and make it as useful as possible. 

What agent-based modeling does is essentially put a reflective pause to gather different perspectives and domain expertise levels, meaning how much an agent, a human, knows about the particular field or industry and how much influence their perspective and others play into our datasets. 

# Introducing the Interactive Calculator

The interactive calculator is a collaborative activity tracker for navigating tradeoffs in data and modeling AI cards.

Our approach was from a learner-centered perspective, meaning it encompasses all stakeholders, no matter their technical expertise or overall background. Together, they bring each of their unique set of skills and knowledge and draw from past experiences, ideas, and questions.

In ["Exploring How Machine Learning Practioners (Try to) Use Fairness Toolkits"](https://facctconference.org/static/pdfs_2022/facct22-3533113.pdf) researchers found that opacity was necessary to support practitioners within the toolkits. This is one of the reasons why  adding contextual information to content such as definitions, guiding questions, and other links was important to transform what tools can be.

# Tech Stack

We started with Svelte thinking it would be in the Playbooks Lab tool ecosystem. As organizations and internal decisions changed, Svelte was no longer going to be used but we decided to continue using it for this particular project for the following reasons:

## Folder-based routing

SvelteKit is a Svelte folder-based routing framework for creating web applications, and PostCSS, which is a styling CSS (cascading styling sheet) using the power of JavaScript. 

Svelte styles are scoped by default to prevent collisions. However, we wanted to use a mix of scoped and global styles to make sure that we can reuse styles across components.

This means that the pages are [server-side rendering (SSR)](https://web.dev/rendering-on-the-web/#server-rendering) without having to sacrifice any of the other performance features since it works like a compiler without having to embed a [virtual DOM](https://svelte.dev/blog/virtual-dom-is-pure-overhead), which means it will be much faster than JavaScript frameworks such as React. 

![Replace with single app png for main dev located in /docs]

## Component-based architecture

Most notably, in alignment with the systems thinking process, thinking big picture and how everything will connect for understanding, flexibility, and maintainability. Component-based architecture made the most sense since it’s easier to test components separately – adding, replacing, and reusing responsible for one module. 

From there, our API uses [custom stores](https://svelte.dev/tutorial/custom-stores), which are objects that have a `subscribe()` method with functions such as `onMount`, `onDestroy`, beforeUpdate, afterUpdate in and out of component. This means that you can store anything and update your values as it changes. 

When the data value changes, the data output also rewrites itself and changes accordingly to the value it assigns to the props. We can make stores reactive with the reactive `$store` syntax. 

![Replace with client side png for main dev located in /docs]

In our interactive calculator, we currently have two separate sections and stores: the ask and inspect. The ask for gathering information about individual agents and their level of domain expertise and more. The inspect gathers information as a team and what areas they believe are most important. 

That’s why our components are mutually exclusive since both sections will be using the same group to form selected inputs and values.  

Since certain features are not currently supported by Svelte and pre-production SvelteKit, that means there are also some workarounds,bugs, and future feature ideas, such as multi-user interactions and the ability to style each component individually within the file rather than referencing them all from a main.scss file. (Currently, we are using `global state` and a preprocessor to try and tackle that!)

The latter was an issue submitted and discussed by other Svelte contributors and me and hopefully something we may be able to build or/and see implemented in Svelte! 

# Tidbits of joy and wisdom

There were mountains to climb, but the mountain didn’t seem so steep, alongside mentors, contributors, and an online community along the way. A few learning peaks: 

## Interpersonal

### Fear is a friend and something to run toward, not away from

At first, my scope was a wee bit too large. So after a week of researching and seeing what the Playbooks Lab team needed help with, considering they were revamping the entire site, Mahima and I talked about implementing an interactive calculator tool that would be a collaborative tool to navigate tradeoffs.  

Before joining this project, I was (and still am!) fascinated by participatory design and what it means to create tools to aid learning. I have built little tools and websites but never at a large scale like this.

Admittedly, this is when a lot of doubt started to creep in about my abilities and how far I could stretch them. 

Ultimately, I wanted to challenge myself to grow technically and personally, most importantly, learn and contribute all that I can, even if it meant a few stumbles.

Building an end-to-end tool for thousands of users sounded intimidating at first. But luckily, with the following resources, self learning, and support, it felt a lot more manageable and a bit at ease. 

Some things that helped from a personal toolkit point of view: 

- Asking questions… lots of it. No matter how “beginner” it may seem, those small questions backed with your own preparation can lead to deeper and bigger things. Get curious and gather all your questions and address how you have tried to solve your problems/examples  

- Eisenhower Matrix: knowing what to prioritize even when everything looks like a priority

- Break things into smaller chunks, like little blocks stack upon each other. This is something I had the most trouble with and gradually had to build over time. One of my mentor friends Madeline recommended [The Checklist Manifesto](http://atulgawande.com/book/the-checklist-manifesto/) by Atul Gawande, which has helped to look at each and every step

- Overthinking it? Just starting anywhere to keep the momentum going 

- Building consistency is more important than doing everything perfectly... but also remember to take a break! I carved out hours in my day, usually late at night, to code while in school full time

### Embrace the unknown

One thing about working at a bigger company means there may be more hoops to jump through to get things approved or reviewed, such as using certain technologies, features to include feedback, security reasons, and more. Setting up such infrastructure meant making sure to get this approved, finding alternatives, and trying to communicate this as early as possible. 

Knowing certain processes and communication might take longer, I started seeking outside resources and communities, such as the Svelte Developer community, and asking questions. 

However, one thing I wish I would have done, was doing the code and design alongside each other the entire process. That way, the handoff/crossover would be marginally smaller, knowing what would be able to translate technically given the tool to work with.

I met with Mahima and Andrew every other week and set up chats with Vivian and Bhaktipriya. Those calls were really helpful clarifying any gaps and concepts, review, and just chat and catch up! 

## Design & Technical 

### Pinpoint the simplest, most scoped-down version of a feature

At first, I thought deciding to create the data visualizations with d3.js would be best with a matrix chart. However, if we scoped that down even further and tried to make it to the simplest form, what we needed was a display of information that showed 1) what the team should focus on 2) where the strengths lie of each agent.

From there, we decided to use custom stores and look into other open source tools such as [Frappe Charts](https://frappe.io/charts) and [custom stores](https://svelte.dev/tutorial/custom-stores).

This process would save a lot of time and also add value to the users for production/testing.  

### Systems thinking: Dissect each component and task and see how everything connects

Perhaps the most challenging is systems thinking, especially when designing for [nascent experiences](https://medium.com/people-ai-research/there-wasnt-a-playbook-for-creating-nascent-experiences-until-now-9f2a0a518ceb). How are things connected? How do we go from creating something from complete scratch that doesn’t really have a reference point to a full-fledged product – basically reshaping the experience?

I felt that the interactive calculator concept was quite abstract since there were interactive calculator tools out there but not one quite like this one. The most comparable was our old spreadsheet which was separated into tabs. 

When designing the product, we decided what user-facing elements and inputs would guide them through their experience and how to display such information. As Design Lead Jess Myra said in [Google PAIR’s article](https://medium.com/people-ai-research/there-wasnt-a-playbook-for-creating-nascent-experiences-until-now-9f2a0a518ceb) “The nascent framework is not a recipe, it’s a thermometer.” 

We know that our target audience, which are mostly producers who create the datasets and or documentation such as product managers and data scientists, cognitive baseline would involve less friction since it uses the same information but in a different way, dragging and ordering accordions and more.

In many ways, our features were built this way to reuse the same component in different ways. For example, accordions, as a way to hide data inputs and also drag and drop. 

### Read the documentation and document everything!

One piece of advice from Vivian was to look at the documentation first before searching on Google or Stack Overflow for information. The documentation has almost everything and more, some gold nuggets that may be easier to find using ctrl + f. 

Just like data cards, any form of documentation is like an artifact, especially when considering open source, as developers and contributors at large use this as a form of guide to understanding more about the project at hand.  

When creating documentation, I started looking at existing open source projects such as [Google’s Style Guide](https://github.com/google/styleguide) and a [collection of great documentation gathered through open source](https://github.com/matheusfelipeog/beautiful-docs). 

While every set of documentation is unique to its product/project, they were good examples to go off of to create a structured outline for the rest to come.

A sincere thank you to everyone we cross paths with, from the Svelte community to other contributors! A special thanks to Mahima, Andrew, Bhaktipriya, and Vivian for their guidance and continuous support. 

We look forward to seeing how people use the Interactive Calculator! If you are interested in contributing in any way or have inquiries, feel free to reach out to us via GitHub.

*Taylor is a first-year undergraduate. She is currently fascinated by education, technology, and sustainability.*  