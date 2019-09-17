import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(prop) {
  const authorList = prop.authorsList.map(auth => (
    <AuthorCard authorItem={auth} key={auth.first_name} />
  ));
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorList}</div>
      </div>
    </div>
  );
}

export default AuthorList;
