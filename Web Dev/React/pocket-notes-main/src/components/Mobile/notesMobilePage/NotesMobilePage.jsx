import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotesMobilePage.css";
import enter from "../../../assets/icons/enter.png";
import back from "../../../assets/icons/back.png";
import home from "../../../assets/home.png";
import MobileNotesContent from "../notesContentMobile/MobileNotesContent";
import usePocketContext from "../../../hooks/usePocketContext";

function NotesMobilePage() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();
  const { notes, setNotes, selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [setSelected, setNotes, selected]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
      setText("");
    }
  };

  const handleSaveNotes = (e) => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const goBack = () => {
    setSelected("");
    navigate("/");
  };

  return (
    <div className="mobiles_notes_page">
      <div className="mobile_notes_content_title">
        <img src={back} alt="back" onClick={goBack} />
        <div
          className="mobile_notes_content_title_color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="mobile_notes_content_title_text">
          {selectedTitle}
        </div>
      </div>
      <div className="mobile_notes_page_body">
        {notes.length === 0 ? (
          <div className="mobile_notes_page_body_empty">
            <div style={{ backgroundImage: `url(${home})` }}>
          </div>
            
          </div>
        ) : (
          <div>
            {notes.map((note, index) => (
              <MobileNotesContent key={index} note={note} />
            ))}
          </div>
        )}
      </div>
      <div className="mobile_notes_input">
        <textarea
          value={text}
          placeholder="Enter your text here....."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default NotesMobilePage;
