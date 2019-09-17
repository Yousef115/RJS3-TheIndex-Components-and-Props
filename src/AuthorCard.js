import React from "react";

function AuthorCard(prop) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={prop.authorItem.imageUrl}
            alt={prop.authorItem.first_name + " " + prop.authorItem.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>
              {prop.authorItem.first_name + " " + prop.authorItem.last_name}
            </span>
          </h5>
          <small className="card-text">
            {/* {prop.authorItem.books.length} books */}
          </small>
        </div>
      </div>
    </div>
  );
}
export default AuthorCard;
