// ==UserScript==
// @name         Tennis Hide Info
// @namespace    https://player.pl/
// @version      0.3
// @updateURL    https://github.com/kamkow10/TampermonkeyScripts/raw/main/tennis-hide-info.user.js
// @downloadURL  https://github.com/kamkow10/TampermonkeyScripts/raw/main/tennis-hide-info.user.js
// @description  Script to hide match time
// @author       Kamil Kowalczyk
// @match        https://player.pl/eurosport*
// @grant        none
// ==/UserScript==

const styles = document.createElement('style');
styles.innerHtml = `
  .detail__metadata-item,
  .rgpl-progress-control {
    display: none !important;
  }
`;
document.head.appendChild(styles);
