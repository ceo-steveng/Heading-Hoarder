// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'copy') {
      // Get the H1, H2, H3, and H4 titles on the page
      var headings = document.querySelectorAll('h1, h2, h3, h4');
      var headingTexts = [];
  
      // Add the text of each heading to the headingTexts array
      for (var i = 0; i < headings.length; i++) {
        headingTexts.push(headings[i].textContent);
      }
  
      // Join the heading texts into a single string, separated by newlines
      var headingString = headingTexts.join('\n');
  
      // Copy the heading string to the clipboard
      navigator.clipboard.writeText(headingString);
    }
  });
  