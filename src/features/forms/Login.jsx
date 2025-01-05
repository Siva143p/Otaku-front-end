import React from "react";
import { LoginFormContent } from "./contentData";
import RenderForm from "./RenderForm";

function Login() {
  return (
    <div>
      <RenderForm type={"login"} data={LoginFormContent} />
    </div>
  );
}

export default Login;
