import React, { useState } from "react";
import { GroupContainer, GroupTabs } from "@divi/modal";
import { FieldContainer } from "@divi/module";
import { __ } from "@wordpress/i18n";
import { __handleSubToggle, bgTabOptions } from "..";
import { ColorPickerContainer, ToggleContainer } from "@divi/field-library";
import { GradientBackground } from "../common";
const OverlayBackground = (props: any) => {
  const { attrs, defaultSettingsAttrs } = props;
  const [overlayBgTab, setOverlayBgTab] = useState("sub_toggle_color");
  const useOverlayGradient =
    "on" == attrs?.hoverGradient?.advanced?.colorUse?.desktop?.value;

  return (
    <GroupContainer
      id="hoverBackground"
      title={__("Overlay Background", "dnxte-divi-essential")}
    >
      <GroupTabs
        showLabel={true}
        activeTab={overlayBgTab}
        showIcon={false}
        tabs={bgTabOptions}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          __handleSubToggle(e, setOverlayBgTab)
        }
      />
      <FieldContainer
        attrName="hoverGradient.advanced.colorUse"
        label={__("Overlay Background", "dnxte-divi-essential")}
        description={__("Choose gradient or color", "dnxte-divi-essential")}
        visible={overlayBgTab === "sub_toggle_color"}
      >
        <ToggleContainer />
      </FieldContainer>
      <FieldContainer
        id="hoverGradient.advanced.singleColorOne"
        attrName="hoverGradient.advanced.singleColorOne"
        label={__("Select Background Color", "dnxte-divi-essential")}
        description={__("Add Background", "dnxte-divi-essential")}
        visible={overlayBgTab === "sub_toggle_color" && useOverlayGradient}
        features={{ sticky: false, hover: true, responsive: true }}
      >
        <ColorPickerContainer />
      </FieldContainer>

      {/* Gradient */}
      <GradientBackground
        slug="hoverGradient"
        title={__("Overlay", "dnxte-divi-essential")}
        visible={overlayBgTab === "sub_toggle_gradient"}
        attrs={attrs}
        defaultSettingsAttrs={defaultSettingsAttrs}
      />
    </GroupContainer>
  );
};

export default OverlayBackground;
