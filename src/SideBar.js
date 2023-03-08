import './App.css';

function Sidebar({ notes, onAdd, onDelete, activenote,setactivenote}) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button id="add" onClick={onAdd}>+</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note) => (
         <div className={`note ${note.id === activenote && "active"}`} key={note.id} onClick={()=> setactivenote(note.id)}>
            <div className="note-title">
              <strong>{note.title}</strong>
              <button id="delete" onClick={() => onDelete(note.id)}>delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-date">date {new Date(note.lastdate).toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit" })}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
