import React from "react";
import authors from "./data";
import SideBar from "./Sidebar";
import AuthorList from "./AuthorList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <AuthorList authorsList={authors} />
      </div>
    </div>
  );
}

export default App;
