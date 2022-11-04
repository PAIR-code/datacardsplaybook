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

export const CARD_NODE_CLASSES = {
  0: 'card-content',
  1: 'datacard',
  2: 'card-section',
  3: 'card-subsection',
  4: 'card-field',
}

export const CARD_ERROR_CLASS = 'card-error';
export const CARD_SUMMARY_CLASS = 'card-summary';

/* Maps from HTML tag name to wrapper class name */
export const WRAPPER_CLASSES = {
  'PRE': 'code-wrapper',
  'TABLE': 'table-wrapper',
}

/* Maps from custom tag key to custom tag values */
export const CUSTOM_TAGS = {
  'scope': ['telescope', 'periscope', 'microscope'],
  'width': ['full', 'half'],
}

export const TAG_SEPARATOR = ':';
