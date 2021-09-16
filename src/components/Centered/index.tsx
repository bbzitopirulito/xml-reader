import styled from "styled-components";

export const Centered = styled.div<{ height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
`;
