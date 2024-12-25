// External dependencies.
import React, { ReactElement } from "react";
// import { hoverEffects } from "./helpers";
// WordPress dependencies.
import { __ } from "@wordpress/i18n";

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontBodyGroup,
  FontGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
  FieldContainer,
} from "@divi/module";
import { type Module } from "@divi/types";

import { GroupContainer, GroupTabs } from "@divi/modal";
// Local dependencies.
import { CLASS_NAME_Attrs } from "./types";
import {
  ColorPickerContainer,
  SelectContainer,
  RangeContainer,
  ToggleContainer,
  SpacingContainer,
} from "@divi/field-library";

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<CLASS_NAME_Attrs>): ReactElement => {

  return (
    <React.Fragment>
      <GroupContainer
        // id="hoverEffect"
        // title={__("Hover Effect", "dnxte-divi-essential")}
      >
        
        
      </GroupContainer>

      <FontGroup
        groupLabel={__("Heading Text", "dnxte-divi-essential")}
        attrName="heading.decoration.font"
      />
      <FontGroup
        groupLabel={__("Description Text", "dnxte-divi-essential")}
        attrName="content.decoration.font"
      />
      <SizingGroup />
      <GroupContainer
        id="hoverBoxSpacing"
        title={__("Spacing", "dnxte-divi-essential")}
      >
        <SpacingGroup
          attrName="heading.decoration.spacing"
          groupLabel={__("Heading", "dnxte-divi-essential")}
          fieldLabel={__("Heading", "dnxte-divi-essential")}
          grouped={false}
        />
        <SpacingGroup
          attrName="content.decoration.spacing"
          groupLabel={__("Description", "dnxte-divi-essential")}
          fieldLabel={__("Description", "dnxte-divi-essential")}
          grouped={false}
        />
        <SpacingGroup grouped={false} />
      </GroupContainer>
      <BorderGroup />
      {/* <BorderGroup attrName="image.decoration.border" /> */}
      <BoxShadowGroup />
      <FiltersGroup />
      <TransformGroup />
      <AnimationGroup />
    </React.Fragment>
  );
};

const HoverDirection = (props: any) => {
  const { slug, directions, defaultValue, visible, defaultSettingsAttrs } =
    props;
  return (
    <FieldContainer
      attrName={`hover.advanced.${slug}`}
      label={__("Select Image Hover Direction", "dnxte-divi-essential")}
      description={__("Select the types of gradient", "dnxte-divi-essential")}
      visible={visible}
      defaultAttr={defaultSettingsAttrs?.hover?.advanced?.[slug]}
    >
      <SelectContainer
        options={directions}
        defaultValue={defaultValue}
        displayCheckMark={true}
      />
    </FieldContainer>
  );
};
