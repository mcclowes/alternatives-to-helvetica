import Dumb from "../../components/Dumb";
import React from "react";
import Page from "../../components/Page";
import fonts from "../../fonts";
import Font from "../../components/Font";

const Main = (props) => {
  return (
    <Page>
      <Dumb>
        {fonts
          .filter((font) => !font.disabled)
          .sort((a, b) => b.match - a.match)
          .map((font) => (
            <Font
              key={font.fontName}
              font={font}
              text="Alternatives to Helvetica"
            />
          ))}
      </Dumb>
    </Page>
  );
};

export default Main;
