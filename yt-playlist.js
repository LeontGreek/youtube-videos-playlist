// ==UserScript==
// @name         YouTube videos playlist
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Make a playlist of all videos
// @author       LeontG
// @match        https://www.youtube.com/*
// @match        https://*.youtube.com/*
// @exclude      https://*.youtube.com/watch?*
// @exclude      https://*.youtube.com/playlist?*
// @icon         https://cdn.icon-icons.com/icons2/195/ICO/256/YouTube_23392.ico
// @grant        GM_openInTab
// @grant        window.onurlchange
// @run-at       context-menu
// ==/UserScript==

(function() {
    "use-strict"

    var pageUrl = window.location.href;
    var channelId = document.querySelector("[itemprop=identifier]").content;
    const id = channelId;
    const playlistId = replaceCharacter(id, 1, "U");
    GM_openInTab("https://www.youtube.com/playlist?list=" + playlistId);


    function replaceCharacter(string, index, replacement) {
        return (
            string.slice(0, index) +
            replacement +
            string.slice(index + replacement.length)
        );
    }

})();
