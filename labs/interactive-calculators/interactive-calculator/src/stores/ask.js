/** 
 * 
 * Ask 
*/

import {writable, derived } from 'svelte/store';

function createAskStore() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    set,
    update,
    ask: (questions, options) => {
      set({questions, options});
    },
    answer: (answer) => {
      set({answer});
    },
    clear: () => {
      set({});
    }
  };
}

export const  questions  = [{
  id: "Data Fluency Level"
  const options: [{
    id: 1, 
    label: "No Fluency",
    description: "No data experience",
    value: '1', 
  }, 
  {
    id: 2,
    label: "Limited fluency",
    description: "Basic understanding of the concepts represented in the data (conversational)",
    value: '2',     
  }, {
    id: 3,
    title: "Average fluency",
    description: "Ability to speak, write and engage in the data and its use cases (literate)",
    value: '3', 
  }, {
    id: 4,
    title: "High fluency",
    description: "Competent in designing and developing projects around data or applying transformations onto the data",
    value: '4',
  }, {
    id: 5, 
    title: "Expert fluency",
    description: "Strongly capable in understanding, manipulating and utilizing data across many domains",
    value: '5'
  }, {
    id: "Domain Expertise"
    options: [{
    id: 1
    title: "No expertise",
    description: "Zero knowledge in domain",
    value: '1',
  }, {
    id: 2 
    title: "Novice",
    description: "Just starting to know about general issues or want to gain insight on some topic",
    value: '2',     
  }, {
    id: 3
    title: "Intermediate",
    description: "Can answer general questions and have some basic domain concepts",
    value: '3', 
  }, {
    id: 4
    title: "Professional",
    description: "Can answer and discuss domain specific topics well",
    value: '4',
  }, {
    id: 5
    title: "Expert",
    description: " Highly informative and can timely answer critical questions",
    value: '5'
    }]
  }]

}];

export const AskResults = createAskStore();
export const AskDataFluency = createAskDataFluencyStore();
export const AskDomainExpertise = createAskDataFluencyStore();
