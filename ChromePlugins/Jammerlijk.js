// ==UserScript==
// @name         Jammerlijk
// @version      1.0
// @description  Beetje jammer userscript
// @author       Emile Nijssen
// @match        https://tweakers.net/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const width = '72px';

    const $tables = document.querySelectorAll('table.headlines');
    [].forEach.call($tables, $table => {
        const $colgroups = $table.querySelector('colgroup');
        const $colgroupJammer = document.createElement('col');
        $colgroupJammer.classList.add('jammers');
        $colgroupJammer.style.width = width;
        $colgroups.appendChild($colgroupJammer);

        const $headlines = $table.querySelectorAll('.headline');
        [].forEach.call($headlines, $headline => {
            const $replies = $headline.querySelector(':scope > .replies');
            const $jammers = document.createElement('td');
            $jammers.classList.add('jammers');
            $headline.insertBefore($jammers, $replies);

            if ($replies.childElementCount === 0) return;
            const $repliesLink = $replies.querySelector(':scope > a');

            const url = new URL($repliesLink.href);
            const qs = new URLSearchParams();
            qs.set('mode', 'flat');
            qs.set('niv', '-1');

            const $jammersLink = document.createElement('a');
            $jammersLink.classList.add('commentCount');
            $jammersLink.href = $repliesLink.href;
            $jammersLink.textContent = '-';
            $jammersLink.style.backgroundImage = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgNzIgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5qYW1tZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iamFtbWVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIiBzdHJva2U9IiNCM0IzQjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuODU1LDE2LjAxODYgTDYuNTQyOSwyMC44NzEyIEw2LjUyMjksMTYuMDE4NiBMMi40OTk3LDE2LjAxODYgQzEuMzk0NywxNi4wMTg2IDAuNDk5NywxNS4xNTA1IDAuNDk5NywxNC4wNzg3IEwwLjQ5OTcsMi40Mzk1IEMwLjQ5OTcsMS4zNjc3IDEuMzk0NywwLjQ5OTYgMi40OTk3LDAuNDk5NiBMNjcuNTQ0ODYzNywwLjQ5OTYgQzY4LjY0OTg2MzcsMC40OTk2IDY5LjU0NDg2MzcsMS4zNjc3IDY5LjU0NDg2MzcsMi40Mzk1IEw2OS41NDQ4NjM3LDE0LjA3ODcgQzY5LjU0NDg2MzcsMTUuMTUwNSA2OC42NDk4NjM3LDE2LjAxODYgNjcuNTQ0ODYzNywxNi4wMTg2IEwxMS44NTUsMTYuMDE4NiBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)';
            $jammersLink.style.width = width;
            $jammersLink.addEventListener('mouseover', () => {
                fetch(`${url.pathname}?${qs.toString()}`)
                    .then(res => res.text())
                    .then(html => {
                        const jammers = html.match(/jammer/gi);
                        $jammersLink.textContent = (jammers ? jammers.length : 0) + ' jammers';
                    });
            });
            $jammers.appendChild($jammersLink);
        });
    });
})();