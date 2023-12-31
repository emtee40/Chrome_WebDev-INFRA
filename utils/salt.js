/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Generates salt string. When combined with idPrefix, it is guaranteed
 * to form a unique id on the page (no other element has id 'idPrefix+salt').
 * @param {string} idPrefix Id prefix used to find a matching element.
 * @return {string} A salt that is unique on the page.
 */
export const generateIdSalt = idPrefix => {
  const salt = Math.random().toString(36).substr(2, 9);
  // eslint-disable-next-line
  return document.getElementById(idPrefix + salt)
    ? generateIdSalt(idPrefix)
    : salt;
};
