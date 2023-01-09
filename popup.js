document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copy-button');
  
    // Add click event listener to the copy button
    copyButton.addEventListener('click', function() {
      // Send a message to the active tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {'message': 'copy'});
      });
    });
  });
  