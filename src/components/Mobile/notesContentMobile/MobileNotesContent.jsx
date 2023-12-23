import React from "react";
import "./MobileNotesContent.css";

function MobileNotesContent({ note }) {
  return (
    <div className="mobile_notes_content_body">
      <div className="mobile_notes_content_details">
        <p>{note.content}</p>
      </div>
      <div className="mobile_notes_content_date_time_details">
        <div className="mobile_notes_content_date">{note.date}</div>
        <div className="mobile_notes_content_time">●&nbsp;&nbsp;{note.time}</div>
      </div>
    </div>
  );
}

export default MobileNotesContent;
