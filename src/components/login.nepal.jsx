import React from "react";
import Form from "../common/form";
import styled from "styled-components";
import { Flex } from "rebass";
const LoginPageWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

class Login extends Form {
  state = {};
  render() {
    return (
      <LoginPageWrapper
        width={1}
        alignItems="center"
        justifyContent="center"
        bg="lightgray"
      >
        <form>
          {this.renderInput("username", "Username")}
          <button className="btn btn-primary sm">Submit</button>
          <p>* This is the extended data for the nepali product</p>
        </form>
      </LoginPageWrapper>
    );
  }
}

export default Login;
