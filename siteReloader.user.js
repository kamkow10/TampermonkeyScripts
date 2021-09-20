// ==UserScript==
// @name         SiteReloader
// @namespace    http://netflix.com/
// @version      0.3
// @updateURL    https://github.com/kamkow10/TampermonkeyScripts/raw/main/siteReloader.user.js
// @downloadURL  https://github.com/kamkow10/TampermonkeyScripts/raw/main/siteReloader.user.js
// @description  Web site auto-reloader
// @author       Kamil Kowalczyk
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload(true), 10000);
})();
