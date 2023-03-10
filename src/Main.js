import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const localStorage = window.localStorage;

function Main({ activenote, oneditnote, onDelete }) {

  const oneditfield = (key, value) => {
    oneditnote({
      ...activenote,
      [key]: value,
      lastdate: Date.now(),
    });
    handleSave();
  };

  const handleDelete = () => {
    onDelete(activenote.id);
  };

  const handleSave = () => {
    const noteString = JSON.stringify(activenote);
    localStorage.setItem(activenote.id, noteString);
  };

  if (!activenote) return <div className="inactivenote"><center>No note selected</center></div>;

  return (
    <div className="main">
      <div className="notes-edit">
        <div className="buttons-div">
          <input 
            type="text" 
            id="title" 
            value={activenote.title} 
            onChange={(e) => oneditfield("title",e.target.value)}
            placeholder="Write your title here" 
            autoFocus
          />
          <div>
            <button id="save" onClick={handleSave}>Save</button>
            <button id="delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className="body-div">
          <ReactQuill 
            value={activenote.body} 
            onChange={(value) => oneditfield("body", value)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
