import { useState } from "react";
export default function Folder({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  handleCreateNode,
  explorer,
}) {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [editInput, setEditInput] = useState({
    visible: false,
    isFolder: null,
    value: null,
  });
  const [createInput, setCreateInput] = useState({
    visible: false,
    isFolder: null,
    value: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpanded(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const handleEditFolderorFile = (e, isFolder, value) => {
    e.stopPropagation();
    setExpanded(true);
    setEditInput({
      visible: true,
      isFolder,
      value,
    });
  };
  const handleDeleteFolderorFile = (e, isFolder, value) => {
    e.stopPropagation();
    setExpanded(true);

    handleDeleteNode(explorer?.id);
  };
  const onAddRootFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleCreateNode(e.target.value);
      setCreateInput((prevCreateInput) => ({
        ...prevCreateInput,
        visible: false,
      }));
    }
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer?.id, e.target.value, showInput.isFolder);
      setShowInput((prevShowInput) => ({
        ...prevShowInput,
        visible: false,
      }));
    }
  };
  const onEditFileOrFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleEditNode(explorer?.id, e.target.value);
      setEditInput((prevShowInput) => ({
        ...prevShowInput,
        visible: false,
        value: null,
      }));
    }
  };
  if (!explorer) {
    return (
      <div>
        <h3>No Root Folders Found Please create one</h3>
        <div className="input-container">
          <input
            type="text"
            autoFocus
            onKeyDown={onAddRootFolder}
            onBlur={() => {
              setCreateInput((prevCreateInput) => ({
                ...prevCreateInput,
                visible: false,
              }));
            }}
            value={createInput.value}
            onChange={(e) =>
              setCreateInput((prevCreateInput) => ({
                ...prevCreateInput,
                value: e.target.value,
              }))
            }
            className="inputContainer__input"
          />
        </div>
      </div>
    );
  } else {
    if (explorer.isFolder) {
      return (
        <div style={{ marginTop: 5 }}>
          <div
            className="folder"
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          >
            {" "}
            <span>
              {expanded ? "-" : "+"} 📁 {explorer.name}
            </span>
            <div style={{ display: "flex" }}>
              <button
                onClick={(e) => handleEditFolderorFile(e, true, explorer)}
              >
                Update
              </button>

              <button
                onClick={(e) => handleDeleteFolderorFile(e, true, explorer)}
              >
                Delete
              </button>

              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
          <div
            style={{ display: expanded ? "block" : "none", paddingLeft: 20 }}
          >
            {editInput.visible && (
              <div className="input-container">
                <span>{editInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  autoFocus
                  onKeyDown={onEditFileOrFolder}
                  onBlur={() => {
                    setEditInput((prevEditInput) => ({
                      ...prevEditInput,
                      visible: false,
                      value: null,
                    }));
                  }}
                  //onChange={(e) => setEditInput((prevEditInput) => ({ ...prevEditInput, value: e.target.value } ))}
                  defaultValue={editInput.value.name}
                  className="inputContainer__input"
                />
              </div>
            )}
            {showInput.visible && (
              <div className="input-container">
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  autoFocus
                  onKeyDown={onAddFolder}
                  onBlur={() => {
                    setShowInput((prevShowInput) => ({
                      ...prevShowInput,
                      visible: false,
                    }));
                  }}
                  className="inputContainer__input"
                />
              </div>
            )}
            {explorer.items.map((item) => (
              <Folder
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                explorer={item}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ display: "flex" }}>
            <span className="file">📄 {explorer.name}</span>
            <div style={{ padding: 8 }}>
              <button
                onClick={(e) => handleEditFolderorFile(e, false, explorer)}
              >
                Update
              </button>
              <button
                onClick={(e) => handleDeleteFolderorFile(e, false, explorer)}
              >
                Delete
              </button>
            </div>{" "}
          </div>

          {editInput.visible && (
            <div className="input-container">
              <span>{editInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                autoFocus
                onKeyDown={onEditFileOrFolder}
                onBlur={() => {
                  setEditInput((prevEditInput) => ({
                    ...prevEditInput,
                    visible: false,
                    value: null,
                  }));
                }}
                //onChange={(e) => setEditInput((prevEditInput) => ({ ...prevEditInput, value: e.target.value } ))}
                defaultValue={editInput.value.name}
                className="inputContainer__input"
              />
            </div>
          )}
        </div>
      );
    }
  }
}
