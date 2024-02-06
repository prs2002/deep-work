var isExtensionEnabled: boolean = false;

async function handleExtensionEnable() {
  chrome.storage.onChanged.addListener(
    async (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes["isDisabled"]) {
        isExtensionEnabled = changes["isDisabled"].newValue;
      }
    }
  );
}






handleExtensionEnable();
export {};
