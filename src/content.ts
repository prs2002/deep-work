let lastVisibilityState = document.hidden;

function sendMessageToBackground(hidden: boolean) {
  try {
    chrome.runtime.sendMessage(
      { message: "visibility_changed", hidden: hidden },
      (response) => {
        console.log(response.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

setInterval(() => {
  if (document.hidden !== lastVisibilityState) {
    lastVisibilityState = document.hidden;
    sendMessageToBackground(lastVisibilityState);
  }
}, 1000);

sendMessageToBackground(lastVisibilityState);
export {};
