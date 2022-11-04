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

import { TAG_SEPARATOR } from "../constants";

/* Converts given string into kebab case */
export function getIdFromTitle(title: string): string {
  return title.trim().toLowerCase().split(/\s+/).join('-');
}

/* Returns HTML element with the given attributes */
export function createHTMLElement(
  tagName: string,
  className: string = '',
  id: string = '',
  innerHTML: string = '',
): HTMLElement {
  let element = document.createElement(tagName);

  const setAttribute = (attribute, value) => {
    if (value && value.trim().length > 0) {
      element[attribute] = value;
    }
  }

  setAttribute('className', className);
  setAttribute('id', id);
  setAttribute('innerHTML', innerHTML);

  return element;
}

/* Copies given HTML element (innerHTML, class, id only) */
export function copyHTMLElement(element: HTMLElement) {
  if (!element) {
    return document.createElement('div');
  }
  return createHTMLElement(
    element.tagName, element.className, element.id, element.innerHTML);
}

/* Returns iterator for HTML collection */
export function buildNodeIterator(elements: NodeListOf<ChildNode>) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < elements.length
        ? elements[nextIndex++] : null;
    },
    peek() {
      return nextIndex < elements.length
        ? elements[nextIndex] : null;
    }
  };
}

/* Returns expand icon element with click listener */
export function getExpandMoreElement(section: HTMLElement) {
  const element = createHTMLElement('div', 'icon-wrapper expand-more', '',
    '<svg aria-hidden="true" fill="#3c4f50" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>');

  element.addEventListener('click', () => {
    section.classList.toggle('open');
  })

  return element;
}

/* Returns tooltip that display text on hover */
export function getTooltip(innerHTML: string) {
  const element = createHTMLElement('div', 'tooltip', '',
  '<svg aria-hidden="true" class="tooltip-icon" fill="#3c4f50" viewBox="0 0 24 24" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/></svg>');

  element.append(createHTMLElement('div', 'tooltip-text', '', innerHTML));

  return element;
}

/* Splits string into key, value by tag separator */
export function getTagKeyAndValue(text: string) {
  const tag = text.split(TAG_SEPARATOR, 2);
  if (tag.length != 2) {
    return { key: '', value: '' };
  }

  return { key: tag[0].trim(), value: tag[1].trim() };
}
