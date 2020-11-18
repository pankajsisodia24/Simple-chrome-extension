//This Extension Created by mr.Pankaj Kumar Sisodia
//All rights reserved

'use strict';
chrome.runtine.onInstalled.addListener(function(){
    chrome.storage.sync.set({color: 'pink'}, function() {
        console.log('The color is pink');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.pageStateMatcher({
                pageUrl: {hostEquals: 'google.com'}
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});