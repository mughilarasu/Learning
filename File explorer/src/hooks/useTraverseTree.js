const useTraverseTree = () => {
  const createRootNode = (name) => {
    return {
      id: new Date().getTime().toString(),
      name,
      isFolder: true,
      items: [],
    };
  };
  function insertNode(
    tree = {},
    folderId = null,
    item = null,
    isFolder = false
  ) {
    if (tree?.id === folderId && tree?.isFolder) {
      tree.items.unshift({
        id: new Date().getTime().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree?.items.map((node) =>
      insertNode(node, folderId, item, isFolder)
    );
    return {
      ...tree,
      items: latestNode,
    };
  }
  const deleteNode = (tree = {}, id = null) => {
    if (tree?.id === id) {
      return null;
    }
    let updatedItems = tree?.items
      .map((node) => deleteNode(node, id))
      .filter(Boolean);
    return {
      ...tree,
      items: updatedItems,
    };
  };

  const renameNode = (tree = {}, id = null, value = null) => {
    if (tree?.id === id) {
      tree.name = value;
      return tree;
    }
    let updatedItems = [];
    updatedItems = tree?.items.map((node) => renameNode(node, id, value));
    return {
      ...tree,
      items: updatedItems,
    };
  };

  return { insertNode, deleteNode, renameNode, createRootNode };
};

export default useTraverseTree;
