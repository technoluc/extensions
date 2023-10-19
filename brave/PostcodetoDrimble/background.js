chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "customLink",
    title: "Postcode to Drimble",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "customLink") {
    const selectedText = info.selectionText;
    const customLink = "https://drimble.nl/postcode/" + selectedText;
    chrome.tabs.create({ url: customLink });
  }
});
