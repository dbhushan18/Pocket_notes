import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/Desktop/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/Desktop/homeDesktop/DesktopHome";
import DesktopNotes from "../../components/Desktop/notesDesktop/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
