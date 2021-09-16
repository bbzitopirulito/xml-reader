import styled from "styled-components";

export const UploadFileInput = styled.input.attrs({
  type: "file",
  accept: "text/xml",
})`
  border: 2px solid grey;
  background-color: #fff;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
