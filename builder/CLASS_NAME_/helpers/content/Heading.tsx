import {
  RichTextContainer,
  SelectContainer,
  TextContainer,
} from "@divi/field-library";
import { GroupContainer } from "@divi/modal";
import { FieldContainer } from "@divi/module";
import { __ } from "@wordpress/i18n";
import React from "react";

const Heading = () => {
  return (
    <GroupContainer id="heading" title={__("Text", "dnxte-divi-essential")}>
      <FieldContainer
        attrName="headingText.innerContent"
        subName="text"
        label={__("Heading Text", "dnxte-divi-essential")}
        description={__(
          "Heading Text entered here will appear inside the module.",
          "dnxte-divi-essential"
        )}
        features={{
          sticky: false,
          dynamicContent: {
            type: "text",
          },
        }}
      >
        <TextContainer />
      </FieldContainer>
      <FieldContainer
        attrName="headingText.innerContent"
        label={__("Select Heading Tag", "dnxte-divi-essential")}
        subName="tag"
        description={__(
          "Select the heading tag, which you would like to use",
          "dnxte-divi-essential"
        )}
      >
        <SelectContainer
          options={{
            h1: { label: __("h1", "dnxte-divi-essential") },
            h2: { label: __("h2", "dnxte-divi-essential") },
            h3: { label: __("h3", "dnxte-divi-essential") },
            h4: { label: __("h4", "dnxte-divi-essential") },
            h5: { label: __("h5", "dnxte-divi-essential") },
            h6: { label: __("h6", "dnxte-divi-essential") },
            p: { label: __("p", "dnxte-divi-essential") },
            span: { label: __("Span", "dnxte-divi-essential") },
          }}
          defaultValue="h2"
          displayCheckMark={true}
        />
      </FieldContainer>
      <FieldContainer
        attrName="content.innerContent"
        label={__("Content", "dnxte-divi-essential")}
        description={__(
          "Input the main text content for your module here.",
          "dnxte-divi-essential"
        )}
        features={{
          sticky: false,
          dynamicContent: {
            type: "text",
          },
        }}
      >
        <RichTextContainer />
      </FieldContainer>
    </GroupContainer>
  );
};

export default Heading;
