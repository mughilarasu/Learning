import "./styles.css";
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, renameNode, createRootNode } =
    useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    console.log(
      "explorerData, folderId, item, isFolder",
      explorerData,
      folderId,
      item,
      isFolder
    );
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };
  const handleEditNode = (id, value) => {
    const finalTree = renameNode(explorerData, id, value);

    setExplorerData(finalTree);
  };
  const handleDeleteNode = (id) => {
    const finalTree = deleteNode(explorerData, id);

    setExplorerData(finalTree);
  };
  const handleCreateNode = (name) => {
    const finalTree = createRootNode(name);

    setExplorerData(finalTree);
  };

  console.log("explorerData", explorerData);
  return (
    <div>
      <Folder
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        handleCreateNode={handleCreateNode}
        explorer={explorerData}
      />
    </div>
  );
}
