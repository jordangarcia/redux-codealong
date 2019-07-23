import React, { useState } from "react";
import "./App.css";

import store from "./store";
window.store = store;

function RightComp3() {
  return (
    <div className="comp" style={{ background: "yellow" }}>
      <h3>RightComp3</h3>
      Display the contents of the search box here
    </div>
  );
}

function RightComp2() {
  return (
    <div className="comp" style={{ background: "green" }}>
      <h3>RightComp2</h3>
      <RightComp3 />
    </div>
  );
}

function RightComp1({ searchValue }) {
  return (
    <div className="comp">
      <h3>RightComp1</h3>
      <RightComp2 searchValue={searchValue} />
    </div>
  );
}

function LeftComp1(props) {
  return (
    <div className="comp" style={{ background: "red" }}>
      <h3>LeftComp1</h3>
      <LeftComp2 search={props.search} setSearch={props.setSearch} />
    </div>
  );
}

function LeftComp2(props) {
  return (
    <div className="comp" style={{ background: "orange" }}>
      <h3>LeftComp2</h3>
      <input
        type="text"
        placeholder="search box"
        value={props.search}
        onChange={e => props.setSearch(e.target.value)}
      />
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  console.log(`value of search is "${search}"`);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="root">
      <h3 style={{ textAlign: "center" }}>App</h3>
      <div className="app-container">
        <LeftComp1 search={search} setSearch={setSearch} />
        <RightComp1 searchValue={search} />
      </div>
    </div>
  );
}

export default App;
