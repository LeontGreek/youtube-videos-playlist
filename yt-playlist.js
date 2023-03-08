// ==UserScript==
// @name         YouTube videos playlist
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Make a playlist of all videos
// @author       LeontG
// @match        https://www.youtube.com/*
// @match        https://youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @grant        window.onurlchange
// @run-at       context-menu
// ==/UserScript==

(function() {
    "use-strict"

    var pageUrl = window.location.href;
    var channelId = document.querySelector("meta[itemprop=channelId]").content;
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
