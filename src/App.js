import React, { useState, useEffect } from "react";
import "./App.css";

import store from "./store";
window.store = store;

class RightComp3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: store.getState().search
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        value: store.getState().search
      })
    })
  }

  render() {
    return (
      <div className="comp" style={{ background: "yellow" }}>
        <h3>RightComp3</h3>
        The value is "{this.state.value}"
      </div>
    );
  }
}

function RightComp2({ searchValue }) {
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
      <RightComp2 />
    </div>
  );
}

function LeftComp1(props) {
  return (
    <div className="comp" style={{ background: "red" }}>
      <h3>LeftComp1</h3>
      <LeftComp2 />
    </div>
  );
}

class LeftComp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        search: store.getState().search
      });
    });
  }

  render() {
    return (
      <div className="comp" style={{ background: "orange" }}>
        <h3>LeftComp2</h3>
        <input
          type="text"
          placeholder="search box"
          value={this.state.search}
          onChange={e =>
            store.dispatch({ type: "SET_SEARCH", search: e.target.value })
          }
        />
      </div>
    );
  }
}

// function LeftComp2(props) {
//   const [search, setSearch] = useState(store.getState().search)
//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       setSearch(store.getState().search)
//     })
//   }, [])

//   return (
//     <div className="comp" style={{ background: "orange" }}>
//       <h3>LeftComp2</h3>
//       <input
//         type="text"
//         placeholder="search box"
//         value={search}
//         onChange={e => store.dispatch({ type: 'SET_SEARCH', search: e.target.value })}
//       />
//     </div>
//   );
// }

function App() {
  const [search, setSearch] = useState("");
  console.log(`value of search is "${search}"`);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="root">
      <h3 style={{ textAlign: "center" }}>App</h3>
      <div className="app-container">
        <LeftComp1 />
        <RightComp1 />
      </div>
    </div>
  );
}

export default App;
