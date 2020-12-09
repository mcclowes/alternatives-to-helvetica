import React from "react";
import styled from "styled-components";

const FontWrapper = styled.div`
  border-bottom: 1px solid #617b7b;
  padding: 1em 0;
  display: inline-block;
`;

const FontName = styled.div`
  font-family: sans-serif;
  color: #617b7b;
`;

const FontDisplay = styled.div`
  @import url("${(props) => props.font.fontUrl}");
  font-weight: bold;
  font-size: 3em;
  font-family: "${(props) => {
      return props.font.fontName;
    }}", sans-serif;
  color: #fffae1;
  text-rendering: optimizeLegibility;
  display: inline-block;
`;

const Font = ({ font, text }) => (
  <FontWrapper>
    <FontName>{font.fontName}</FontName>

    <FontDisplay font={font}>{text}</FontDisplay>
  </FontWrapper>
);

export default Font;
