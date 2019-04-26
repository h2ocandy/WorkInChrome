chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "sci-hub for DOI";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": ["selection"],
        "id": "context" + context
    });
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var urls = "https://sci-hub.tw/" + encodeURIComponent(sText);
    chrome.tabs.create({
        "url": urls
    });
};