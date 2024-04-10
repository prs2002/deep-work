import insertConfirmation from "../utils/DOM_SCRIPTS/InsertConfirmation";
const from =
  new URL(document.location.toString()).searchParams.get("from") ||
  "https://www.google.com";
const url = new URL(from!).hostname;

function handleWork() {
  document.location.href = "https://www.google.com";
}

async function exitFocusMode() {
  await chrome.storage.local.set({ enableBlockDistractingSites: false });
  document.location.href = from;
}

document.getElementById("sitename")!.innerText = url;

document.getElementById("work")!.addEventListener("click", handleWork);
document.getElementById("exit")!.addEventListener("click", () => {
  insertConfirmation(
    exitFocusMode,
    "Yes, disable blocking",
    `Are you sure? once you turn off blocking,
    <strong>Recenter</strong> will not block the distracting websites.`
  );
});

export {};
