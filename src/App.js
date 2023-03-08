import { useState } from "react";
import Sidebar from "./SideBar";
import uuid from "react-uuid";
import Main from "./Main";
import "./App.css";


function App() {

  const [notes, setnotes] = useState([]);
  const [activenote,setactivenote] = useState(false);

  const onAdd = () => {
    const newNote = {
      id: uuid(),
      title: "New Note",
      body: "",
      lastdate: Date.now(),
    };
  
    setnotes([newNote, ...notes])
  }

  const onDelete = (todel) => {
    setnotes(notes.filter((note) => note.id !== todel))
  }

  const getactivenote = () => {
    return notes.find((note) => note.id === activenote)
  }

  const onedit = () => {
    const newNotesArray = notes.map((note) => {
      if (note.id === activenote) {
        return {...note, title: "New Note", body: "", lastdate: Date.now()}
      }
      return note
    })
    setnotes(newNotesArray)
  }

  return (
    <div>
      <div className="title-thing">
      <h1><center>Notion</center></h1>
      <h5><font color = "grey"><em>Like notion but worse</em></font></h5>
      </div>
    <div className = "lotion">
    <Sidebar notes = {notes} 
    onAdd = {onAdd} 
    onDelete = {onDelete}
    activenote = {activenote}
    setactivenote = {setactivenote}>
    </Sidebar>
    <Main activenote = {getactivenote()}>
    </Main>
  </div>
  </div>
  );
}

export default App;
