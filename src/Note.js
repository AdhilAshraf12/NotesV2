function Note({ id, title, body, lastdate, onDelete }) {
    return (
      <div className="note">
        <div className="note-header">
          <h2>{title}</h2>
          <button id="delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
        <div className="note-body">{body}</div>
        <div className="note-footer">
          <small className="note-date">
            date {new Date(lastdate).toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit" })}
          </small>
        </div>
      </div>
    );
  }
  
    export default Note;