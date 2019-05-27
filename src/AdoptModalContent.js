import React from "react";

const AdoptModalContent = props => (
  <React.Fragment>
    <h1> Would you like to Adopt {name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}> Yes </button>
      <button onClick={props.toggleModal}> Hell Yes!!!! </button>
    </div>
  </React.Fragment>
);

export default AdoptModalContent;
