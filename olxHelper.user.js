// ==UserScript==
// @name         OLX-Helper
// @namespace    http://olx.pl/
// @version      0.2
// @updateURL    https://github.com/kamkow10/TampermonkeyScripts/raw/main/olxHelper.user.js
// @downloadURL  https://github.com/kamkow10/TampermonkeyScripts/raw/main/olxHelper.user.js
// @description  Script to help search key words in olx flat page
// @author       Kamil Kowalczyk
// @match        https://www.olx.pl/d/oferta/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let wordsMatches = [
        {
            word: 'Informacja o terminie',
            matches: ['dostępne od', 'dostepne od', 'wolne od', 'wolne jest od', 'zamieszkania od']
        },
        {
            word: 'Październik',
            matches: ['październik', 'pazdziernik', 'pazdz', 'paźdz', '1/10', '1.10', '1 10', '1.10.2021', '01.10.2021']
        },
        {
            word: 'Listopad',
            matches: ['listo', '1/11', '1.11', '1 11']
        },
        {
            word: 'Od zaraz',
            matches: ['od zaraz', 'od teraz']
        },
        {
            word: 'Zmywarka',
            matches: ['zmywarka', 'zmywarkę', 'zmywarke', 'zmywarkom', 'zmywarką', 'zmywarkom']
        },
        {
            word: 'Balkon',
            matches: ['balkon', 'balkonu', 'balk', 'taras', 'tarasem', 'tarasu']
        },
        {
            word: 'Coś o zwierzętach',
            matches: ['zwierzeta', 'zwierz']
        },
    ]

    const descElement = document.getElementsByClassName('css-g5mtbi-Text').item(0);
    if (descElement) {
        createHelper(wordsMatches, descElement.innerText);
    } else {
        console.error('cannot find OLX description container by class name');
    }


})();

function createHelper(wordsMatches, text) {
    const helper = document.createElement('div');
    helper.style = `
    padding: 20px;
    border: 2px solid black;
    background-color: #eee;
    font-size: 18px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 250px;
    margin: 0;
    z-index: 3000000000;
  `;
    let helperContent = [];
    wordsMatches.forEach((wordMatches) => {
        let count = 0;
        wordMatches.matches.forEach((match) => {
            if (text.toLowerCase().includes(match)) {
                count += 1;
            }
        });
        helperContent.push({'word': wordMatches.word, 'exists': count > 0});
    });
    helper.innerHTML = '';
    helperContent.forEach((content) => {
        helper.innerHTML += `
            <div style="display: flex; align-items: center; border-bottom: 1px dotted grey; padding: 10px;">
                <input type="checkbox" style="width: 20px; height: 20px" ${(content.exists ? 'checked >' : '>')}
                <div style="margin-left: 15px;">${content.word}</div>
            </div>
        `
    })
    document.body.appendChild(helper);
}

