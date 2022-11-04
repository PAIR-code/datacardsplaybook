/**
 * @license
 *
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================================
 */

import { CUSTOM_TAGS } from "./constants";
import {
  buildNodeIterator,
  copyHTMLElement,
  getIdFromTitle,
  getTagKeyAndValue
} from "./utils/htmlUtils";

export enum CardNodeType {
  Content = 0,
  Card = 1,
  Section = 2,
  Subsection = 3,
  Field = 4,
}

export interface CardNodeChildren {
  [key: number]: CardNode[];
}

export class CardNode {
  type: CardNodeType;
  title: string;
  id: string;
  tags: string[] = [];
  content: HTMLElement[] = [];
  children: CardNodeChildren = { 1: [], 2: [], 3: [], 4: [] };

  constructor(element: HTMLElement) {
    this.type = getCardNodeType(element);
    this.title = element.innerText;
    this.id = getIdFromTitle(this.title);
  }
}

/* Converts HTML to Card object */
export function buildCard(rawHTML: string): CardNode | null {
  const parser = new DOMParser();
  const rawNode = parser.parseFromString(rawHTML, 'text/html');

  return createCardNode(
    buildNodeIterator(rawNode.body.childNodes));
}

/* Uses node iterator to construct CardNode based on headings */
function createCardNode(
  it: { next(): Node | null; peek(): Node | null; }
): CardNode | null {

  const element = it.peek();
  if (!(element && element instanceof HTMLElement)) { return null; }

  let cardNode = new CardNode(copyHTMLElement(element));
  it.next();

  while (it.peek()) {
    let current = it.peek();
    if (current && current instanceof HTMLElement) {
      const heading = getCardNodeType(current);
      if (heading == 0) {
        cardNode.content.push(copyHTMLElement(current));
        it.next();
      } else if (heading > cardNode.type) {
        const child = createCardNode(it);
        if (child) {
          cardNode.children[heading].push(child);
        }
      } else {
        return cardNode;
      }
    } else {
      // Temporary comment parsing
      if (current && current.textContent != '\n') {
        const tags = current.textContent?.split('<!--');
        tags?.forEach(t => {
          const text = t.replace('-->', '').trim();
          const tag = getTagKeyAndValue(text);
          if (tag.key in CUSTOM_TAGS
            && CUSTOM_TAGS[tag.key].includes(tag.value)) {
            cardNode.tags.push(tag.value);
          }
        });
      }
      it.next();
    }
  }

  return cardNode;
}

/* Returns CardNodeType based on heading number */
function getCardNodeType(element: HTMLElement): CardNodeType {
  if (!element) { return 0; }
  switch (element.tagName) {
    case 'H1':
      return CardNodeType.Card;
    case 'H2':
      return CardNodeType.Section;
    case 'H3':
      return CardNodeType.Subsection;
    case 'H4':
      return CardNodeType.Field;
    default:
      return CardNodeType.Content;
  }
}

/* Returns true if CardNode has no content (including children), else false */
export function isEmptyCardNode(node: CardNode): boolean {
  if (node.content.length > 0) { return false; }

  for (let children of Object.values(node.children)) {
    if (children.length > 0) { return false; }
  }

  return true;
}
