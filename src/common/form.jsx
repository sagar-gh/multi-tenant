import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  renderInput(name, label, type = "text") {
    return <Input name={name} label={label} type={type} />;
  }
}

export default Form;
