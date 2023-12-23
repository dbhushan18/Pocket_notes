import React from "react";
import "./DesktopNotesContent.css";

function DesktopNotesContent({ note }) {
  return (
    <div className="desktop_notes_content_note">
      <div className="desktop_notes_content_details">
        <p>{note.content}</p>
      </div>
      <div className="desktop_notes_content_date_time_details">
        <div className="desktop_notes_content_date">{note.date}</div>
        <div className="desktop_notes_content_time">●&nbsp;&nbsp;{note.time}</div>
      </div>  
    </div>
  );
}

export default DesktopNotesContent;
