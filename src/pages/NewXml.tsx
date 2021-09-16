import React from "react";
import { Centered } from "../components/Centered";
import { UploadFileInput } from "../components/UploadFIleInput";

const NewXml: React.FC = () => {
  return (
    <Centered height="100vh">
      <UploadFileInput />
    </Centered>
  );
};

export default NewXml;
