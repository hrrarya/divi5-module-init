// External dependencies.
import React, { ReactElement, useState } from "react";

// WordPress dependencies
import { __ } from "@wordpress/i18n";

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
} from "@divi/module";
import { type Module } from "@divi/types";

// Local dependencies.
import { CLASS_NAME_Attrs } from "./types";
// import { __handleSubToggle, bgTabOptions } from "./helpers";
// import OverlayBackground from "./helpers/content/OverlayBackground";
// import HeadingBackground from "./helpers/content/HeadingBackground";
// import Image from "./helpers/content/Image";
// import Heading from "./helpers/content/Heading";
import { GroupContainer } from "@divi/modal";
import { RangeContainer } from "@divi/field-library";

export const SettingsContent = ({
  defaultSettingsAttrs,
  ...props
}: Module.Settings.Panel.Props<CLASS_NAME_Attrs>): ReactElement => {
  const { attrs } = props;

  return (
    <React.Fragment>
      {/*<Heading />
      <Image slug="image" />
      <OverlayBackground
        attrs={attrs}
        defaultSettingsAttrs={defaultSettingsAttrs}
      />
      <HeadingBackground
        attrs={attrs}
        defaultSettingsAttrs={defaultSettingsAttrs}
      />*/}
      <LinkGroup />
      <BackgroundGroup
        // defaultGroupAttr={
        //   defaultSettingsAttrs?.module?.decoration?.background?.asMutable({
        //     deep: true,
        //   }) ?? {}
        // }
      />
      <AdminLabelGroup />
    </React.Fragment>
  );
};
