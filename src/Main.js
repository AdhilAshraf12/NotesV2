import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const localStorage = window.localStorage;

function Main({ activenote, oneditnote, onDelete }) {
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);
  const [showSaveConfirmDialog, setShowSaveConfirmDialog] = useState(false);
  
  const oneditfield = (key, value) => {
    oneditnote({
      ...activenote,
      [key]: value,
      lastdate: Date.now(),
    });
  };

  const handleDelete = () => {
    setShowDeleteConfirmDialog(true);
  };

  const handleDeleteConfirmed = () => {
    onDelete(activenote.id);
    setShowDeleteConfirmDialog(false);
  };

  const handleDeleteCancelled = () => {
    setShowDeleteConfirmDialog(false);
  };

  const handleSave = () => {
    setShowSaveConfirmDialog(true);
  };

  const handleSaveConfirmed = () => {
    const noteString = JSON.stringify(activenote);
    localStorage.setItem(activenote.id, noteString);
    setShowSaveConfirmDialog(false);
  };
  

  const handleSaveCancelled = () => {
    setShowSaveConfirmDialog(false);
  };

  if (!activenote)
    return (
      <div className="inactivenote">
        <center>No note selected</center>
      </div>
    );

  return (
    <div className="main">
      {showDeleteConfirmDialog && (
        <div className="confirm-dialog">
          <div>Are you sure you want to delete this note?</div>
          <div>
            <button onClick={handleDeleteConfirmed}>Yes</button>
            <button onClick={handleDeleteCancelled}>No</button>
          </div>
        </div>
      )}
      {showSaveConfirmDialog && (
        <div className="confirm-dialog">
          <div>Are you sure you want to save changes?</div>
          <div>
            <button onClick={handleSaveConfirmed}>Yes</button>
            <button onClick={handleSaveCancelled}>No</button>
          </div>
        </div>
      )}
      <div className="notes-edit">
        <div className="buttons-div">
          <input
            type="text"
            id="title"
            value={activenote.title}
            onChange={(e) => oneditfield('title', e.target.value)}
            placeholder="Write your title here"
            autoFocus
          />
          <div>
            <button id="save" onClick={handleSave}>
              Save
            </button>
            <button id="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <div className="body-div">
          <ReactQuill value={activenote.body} onChange={(value) => oneditfield('body', value)} />
        </div>
      </div>
    </div>
  );
}

export default Main;
