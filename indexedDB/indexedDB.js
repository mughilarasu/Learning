console.log(
  "---GO TO APPLICATION TAB -> STORAGE -> INDEXED DB  TO SEE MORE---"
);
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const request = indexedDB.open("userDB", 1); //dbname, version no

request.onerror = (event) => {
  console.error("An error occurred with indexedDB", event);
};

request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore("users", { keyPath: "id" }); //keypath is primary key
  store.createIndex("nameIndex", "name", { unique: false });
};

request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  const nameIndex = store.index("nameIndex");
  store.put({ id: 1, name: "user 1" });
  store.put({ id: 2, name: "user 2" });
  store.put({ id: 3, name: "user 3" });
  store.put({ id: 4, name: "user 1" });

  console.log("db", db);
  console.log("transaction", transaction);
  console.log("store", store);
  console.log("nameIndex", nameIndex);

  const idQuery = store.get(2);

  idQuery.onsuccess = () => {
    console.log("get user of id(2)", idQuery);
  };

  const nameQuery = nameIndex.getAll("user 1");

  nameQuery.onsuccess = () => {
    console.log("get all users of name(user 1)", nameQuery);
  };

  const user1Index = store.get(4);

  user1Index.onsuccess = function () {
    user1Index.result.name = "user 4";
    store.put(user1Index.result);
    console.log(
      "get user of id(4) and update the name from (user 1) to (user 4)",
      user1Index
    );
  };

  const deleteUser4Index = store.delete(4);

  deleteUser4Index.onsuccess = function () {
    console.log("deleted the user of id(4)");
  };

  transaction.oncomplete = () => {
    db.close();
  };
};
