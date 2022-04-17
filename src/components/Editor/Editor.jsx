import "./Editor.css";
const Editor = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="editor-container">
          <div className="input-container">
            <input type="text" className="input" placeholder="Add title" />
            <textarea
              className="input todo-description"
              name=""
              id=""
              maxLength="200"
              placeholder="Add description"
            ></textarea>
          </div>
          <div className="editor-controls">
            <span className="button editor-cancel">Cancel</span>
            <span className="button editor-add">Add</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Editor };
