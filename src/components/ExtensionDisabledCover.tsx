import "./ExtensionDisabledCover.scss";

interface ExtensionDisabledCoverProps {
  setIsDisabled: (isDisabled: boolean) => void;
}

export default function ExtensionDisabledCover({
  setIsDisabled,
}: ExtensionDisabledCoverProps) {
  function handleActivate() {
    chrome.storage.local.set({ isDisabled: false }, () => {
      setIsDisabled(false);
    });
  }
  return (
    <div className="extension_disabled">
      <div className="extension_disabled__content">
        <div className="extension_disabled__content__title">
          Recenter is Currently Disabled.
        </div>
        <div className="extension_disabled__content__subtitle">
          Click below to Activate Now
        </div>
        <div className="extension_disabled__content__button">
          <button onClick={handleActivate}>Activate Now</button>
        </div>
      </div>
    </div>
  );
}
