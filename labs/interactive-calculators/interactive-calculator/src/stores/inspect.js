/** 
 * 
 * 
*/

import {writable, derived } from 'svelte/store';

function createInspectStore() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    set,
    update,
    ask: (question, options) => {
      set({question, options});
    },
    answer: (answer) => {
      set({answer});
    },
    clear: () => {
      set({});
    }
  };
}

export const count = createInspectStore();