import './App.css';
import striptags from 'striptags';
import { useParams } from 'react-router-dom';

function Sidebar({ notes, onAdd, setactivenote, activenote }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button id="add" onClick={onAdd}>+</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note) => (
          <div className={`sidebar-note ${note.id === activenote && 'active'}`}
            onClick={() => setactivenote(note.id)}>
            <div className="note-title">
              <strong>{note.title}</strong>
            </div>
            <p>{note.body && striptags(note.body).substr(0, 100) + "..."}</p>
            <small className="note-date">date {new Date(note.lastdate).toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit" })}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
