import React from "react";
import RenderForm from "./RenderForm";
import { CreateFormContent } from "./contentData";

function CreateAccount() {
  return (
    <>
      <RenderForm type={"create"} data={CreateFormContent} />
    </>
  );
}

export default CreateAccount;
