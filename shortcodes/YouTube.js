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

const {html} = require('common-tags');

/**
 * A YouTube video embed.
 *
 * The method allows a list of arguments or an object with named props.
 * This makes it possible to declare the video id and the start time as
 * named or anonymous parameters while using the shortcode.
 *
 * Be sure to import custom element from `web-components/YouTube.js`
 * in order to use this shortcode.
 *
 * @param {...(string|import('types').YouTubeArgs)} options
 * @return {string}
 */
function YouTube(...options) {
  let id, startTime;

  if (typeof options[0] === 'string') {
    [id, startTime] = options;
  } else {
    id = options[0].id;
    startTime = options[0].startTime;
  }

  if (!id) {
    throw new Error('No `id` provided to YouTube shortcode.');
  }

  return html`
    <div class="youtube">
      <lite-youtube
        videoid="${id}"
        ${startTime ? `videoStartAt="${startTime}"` : ''}
      >
      </lite-youtube>
    </div>
  `.replace(/\n/g, '');
}

module.exports = {YouTube};
