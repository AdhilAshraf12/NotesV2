function Main({ activenote, onedit}) {

  const onedit = (field, value) => {
    
  }

  return (
      <div className="main">
        <div className="notes-edit">
          <div className="buttons-div">
          <input type="text" id="title" value={activenote.title} onChange={(e) => onedit("title",e.target.value)} placeholder="Write your title here" autoFocus/>
          <div>
          <button id = "save">Save</button>
          <button id = "delete">Delete</button>
          </div>
          </div>
          <div className="body-div">
          <textarea id="body" value={activenote.body} onChange={(e) => onedit("body",e.target.value)} placeholder="Write your text here..."></textarea>
        </div>
        </div>
      </div>
  )
};


  export default Main;
  