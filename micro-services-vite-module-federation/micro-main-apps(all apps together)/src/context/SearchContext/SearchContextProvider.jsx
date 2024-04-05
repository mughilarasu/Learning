import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = React.useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
