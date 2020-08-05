//surveyfield contains logic to render a single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  // console.log(props.input);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

// {touched && error} <--: in ES6
//if(touched==true){return error}
