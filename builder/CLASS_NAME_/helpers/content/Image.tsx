import React from "react";
import { GroupContainer } from "@divi/modal";
import { FieldContainer } from "@divi/module";
import { __ } from "@wordpress/i18n";
import { __handleSubToggle } from "..";
import { TextContainer, UploadContainer } from "@divi/field-library";

const Image = (props: any) => {
  const { slug = "", ...rest } = props;
  return (
    <GroupContainer
      id={`${slug}Container`}
      title={__("Image", "d5-extension-example-modules")}
    >
      <FieldContainer
        attrName={`${slug}.innerContent`}
        subName="src"
        label={__("Upload an Image", "dnxte-divi-essential")}
        description={__("Choose an Image", "dnxte-divi-essential")}
        features={{
          sticky: false,
          responsive: true,
          hover: true,
          dynamicContent: {
            type: "image",
          },
        }}
      >
        <UploadContainer />
      </FieldContainer>
      <FieldContainer
        attrName={`${slug}.innerContent`}
        subName="alt"
        label={__("Image Alt Text", "dnxte-divi-essential")}
        description={__(
          "Define the HTML ALT text for your image here.",
          "dnxte-divi-essential"
        )}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
  );
};

export default Image;
