import React from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { useInstall } from "../../state/StateProvider";
import AppleShare from "./icons/AppleShare";
import ThreeDots from "./icons/ThreeDots";
import AddIOS from "./icons/AddiOS";
import AddAndroid from "./icons/AddAndroid";

function Install() {
  const { setInstall } = useInstall();

  return (
    <div className="install-wrapper">
      {isIOS && (
        <div>
          Safari on iOS
          <ol>
            <li>
              <div className="install-list-item">
                Tap Share <AppleShare />
              </div>
            </li>
            <li>
              <div className="install-list-item">
                Add to Home Screen <AddIOS />
              </div>
            </li>
            <li>
              <div className="install-list-item">Follow the prompts</div>
            </li>
          </ol>
        </div>
      )}
      {isAndroid && (
        <div>
          Chrome/Firefox on Android
          <ol>
            <li>
              <div className="install-list-item">
                Top right menu
                <ThreeDots />
              </div>
            </li>
            <li>
              <div className="install-list-item">
                Add to Home Screen
                <AddAndroid />
              </div>
            </li>
            <li>
              <div className="install-list-item">Follow the prompts</div>
            </li>
          </ol>
        </div>
      )}
      <div className="install-button-wrapper">
        <button
          className="event-details-footer-button"
          onClick={() => setInstall(false)}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default Install;
