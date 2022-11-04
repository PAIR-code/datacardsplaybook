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

import { CardNode, CardNodeType, isEmptyCardNode } from "./CardNode";
import {
  createHTMLElement,
  getExpandMoreElement,
  getTooltip
} from "./utils/htmlUtils";
import {
  CARD_ERROR_CLASS,
  CARD_NODE_CLASSES,
  CARD_SUMMARY_CLASS,
  WRAPPER_CLASSES
} from "./constants";

/* Converts root CardNode to HTMLElement */
export function convertCardToHTML(node: CardNode | null, offset: number = 0) {
  let card = createHTMLElement('article',
    CARD_NODE_CLASSES[CardNodeType.Card]);

  if (!node || node.title == '' || isEmptyCardNode(node)) {
    card.append(
      createHTMLElement(
        'div',
        CARD_ERROR_CLASS,
        '',
        '<p><b>Error:</b> Card could not be generated.</p>'
      )
    );
  } else {
    let cardTop = createHTMLElement('div',
      `${CARD_NODE_CLASSES[CardNodeType.Card]}-header`);
    cardTop.append(convertCardNodeTitleToHTML(node));
    if (node.content.length > 0) {
      cardTop.append(bundleCardNodeContent(node));
    }

    let summarySection = createHTMLElement('section', CARD_SUMMARY_CLASS);
    summarySection.append(cardTop);

    for (let nodeType = CardNodeType.Field;
      nodeType > CardNodeType.Subsection; nodeType--) {
      if (node.children[nodeType].length > 0) {
        const currentChildWrapper = getCardNodeWrapper(nodeType);
        node.children[nodeType].forEach(e => {
          currentChildWrapper.append(convertCardNodeToHTML(e, offset));
        });
        summarySection.append(currentChildWrapper);
      }
    }

    card.append(summarySection);
    node.children[CardNodeType.Section].forEach(section =>
      card.append(convertCardNodeToHTML(section))
    );
  }

  return card;
}

/* Converts CardNode to HTMLElement */
export function convertCardNodeToHTML(
  node: CardNode,
  offset: number = 0
): HTMLElement {
  const tagName = node.type == 2 ? 'section' : 'div';
  const className = CARD_NODE_CLASSES[node.type];

  let element = createHTMLElement(tagName, className);
  if (node.type == CardNodeType.Field) {
    node.tags.forEach(tag => {
      element.classList.add(tag);
    })
  }

  // Add top (title, info)
  let top = createHTMLElement('div', `${CARD_NODE_CLASSES[node.type]}-top`);
  if (node.type == CardNodeType.Section) {
    element.classList.add('open');

    let titleWrapper = createHTMLElement('div',
      `${CARD_NODE_CLASSES[node.type]}-title-wrapper`);
    titleWrapper.append(convertCardNodeTitleToHTML(node, offset));

    const tooltipText = node.children[node.type + 1]
      .map(child => child.title).join(', ');

    if (tooltipText.length > 0) {
      titleWrapper.append(getTooltip(tooltipText));
    }

    top.append(titleWrapper);
    top.append(getExpandMoreElement(element));
  } else {
    top.append(convertCardNodeTitleToHTML(node, offset));
  }
  element.append(top);

  // Add body (content, children)
  let body = createHTMLElement('div', `${CARD_NODE_CLASSES[node.type]}-body`);

  if (node.content.length > 0) {
    body.append(bundleCardNodeContent(node));
  }

  for (let nodeType = 4; nodeType > 0; nodeType--) {
    if (node.children[nodeType].length > 0) {
      const currentChildWrapper = getCardNodeWrapper(nodeType);
      node.children[nodeType].forEach(e => {
        currentChildWrapper.append(convertCardNodeToHTML(e, offset));
      });
      body.append(currentChildWrapper);
    }
  }
  element.append(body);

  return element;
}

/* Returns heading element with CardNode title as content */
export function convertCardNodeTitleToHTML(node: CardNode, offset: number = 0) {
  const className = CARD_NODE_CLASSES[node.type];
  return createHTMLElement(
    `h${node.type + offset}`, `${className}-title`, node.id, node.title);
}

/* Returns CardNode content in wrapper */
export function bundleCardNodeContent(node: CardNode) {
  let content = getCardNodeWrapper(CardNodeType.Content);

  node.content.forEach(e => {
    const currentElement = e.tagName in WRAPPER_CLASSES ?
      createHTMLElement('div', WRAPPER_CLASSES[e.tagName], '', e.outerHTML) :
      e;
    content.append(currentElement);
  });

  return content;
}

/* Returns empty CardNode wrapper div */
export function getCardNodeWrapper(nodeType: CardNodeType): HTMLElement {
  return createHTMLElement('div', `${CARD_NODE_CLASSES[nodeType]}-wrapper`);
}
