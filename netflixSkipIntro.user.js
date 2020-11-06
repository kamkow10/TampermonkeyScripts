// ==UserScript==
// @name         NetflixSkipIntro
// @namespace    http://netflix.com/
// @version      0.2
// @updateURL    https://github.com/kamkow10/TampermonkeyScripts/blob/main/netflixSkipIntro.user.js
// @downloadURL  https://github.com/kamkow10/TampermonkeyScripts/blob/main/netflixSkipIntro.user.js
// @description  Netflix skip intro on space
// @author       Kamil Kowalczyk
// @match        https://www.netflix.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', (event) => {
        const skipButton = document.getElementsByClassName('skip-credits')[0];
        if (((event.key === ' ') || (event.key === 'Spacebar')) && (skipButton != null)) {
            event.preventDefault();
            skipButton.childNodes[0].click();
            setTimeout(() => { document.getElementsByClassName('button-nfplayerPlay')[0].click(); }, 500);
        }
    });
})();
