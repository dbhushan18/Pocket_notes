import React, { useState, useEffect } from "react";
import "./MobileView.css";
import MobilePopup from "../../components/Mobile/createNotesPopupMobile/MobilePopup";
import MobileNotes from "../../components/Mobile/notesMobile/MobileNotes";
import MobileHome from "../../components/Mobile/homeMobile/MobileHome";

function MobileView() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="mobile_sidebar">
      <div className="mobile_sidebar_title">Pocket Notes</div>
      <div className="mobile_sidebar_create_notes_btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
        </button>
      </div>
      <div className="mobile_sidebar_notes_title">
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <MobileNotes
              title={title}
              key={index}
            />
          ))
        ) : (
          <MobileHome />
        )}
      </div>
      {showPopup && (
        <div className="mobile_popup_overlay">
          <MobilePopup
            onClose={handleClose}
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
          />
        </div>
      )}
    </div>
  );
}

export default MobileView;
