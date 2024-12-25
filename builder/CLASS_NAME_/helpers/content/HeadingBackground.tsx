import React, { useState } from "react";
import { GroupContainer, GroupTabs } from "@divi/modal";
import { FieldContainer } from "@divi/module";
import { __ } from "@wordpress/i18n";
import { __handleSubToggle, bgTabOptions } from "..";
import { ColorPickerContainer, ToggleContainer } from "@divi/field-library";
import { GradientBackground } from "../common";

const HeadingBackground = (props: any) => {
  const { attrs, defaultSettingsAttrs } = props;
  const [headingBgTab, setHeadingBgTab] = useState("sub_toggle_color");
  const useHeadingColor =
    "on" == attrs?.headingGradient?.advanced?.colorUse?.desktop?.value;

  console.info(attrs);
  return (
    <GroupContainer
      id="headingBackground"
      title={__("Heading Background", "dnxte-divi-essential")}
    >
      <GroupTabs
        showLabel={true}
        activeTab={headingBgTab}
        showIcon={false}
        tabs={bgTabOptions}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          __handleSubToggle(e, setHeadingBgTab)
        }
      />
      <FieldContainer
        attrName="headingGradient.advanced.colorUse"
        label={__("Heading Background Color", "dnxte-divi-essential")}
        description={__("Choose color", "dnxte-divi-essential")}
        visible={headingBgTab === "sub_toggle_color"}
      >
        <ToggleContainer />
      </FieldContainer>

      <FieldContainer
        id="headingSingleColor"
        attrName="headingGradient.advanced.singleColorOne"
        label={__("Select Background Color", "dnxte-divi-essential")}
        description={__("Add Background", "dnxte-divi-essential")}
        visible={headingBgTab === "sub_toggle_color" && useHeadingColor}
        features={{ sticky: false, hover: true, responsive: true }}
      >
        <ColorPickerContainer />
      </FieldContainer>

      <GradientBackground
        slug="headingGradient"
        title={__("Heading", "dnxte-divi-essential")}
        visible={headingBgTab === "sub_toggle_gradient"}
        attrs={attrs}
        defaultSettingsAttrs={defaultSettingsAttrs}
      />
    </GroupContainer>
  );
};

export default HeadingBackground;
