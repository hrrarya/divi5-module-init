// External dependencies.
import React, { ReactElement } from "react";

// Divi dependencies.
import {
  AttributesGroup,
  ConditionsGroup,
  CssGroup,
  IdClassesGroup,
  PositionSettingsGroup,
  ScrollSettingsGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} from "@divi/module";
import { cssFields } from "./custom-css";

export const SettingsAdvanced = (): ReactElement => (
  <>
    <IdClassesGroup />
    <CssGroup mainSelector=".example_d4_module" cssFields={cssFields} />
    <AttributesGroup />
    <ConditionsGroup />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionSettingsGroup />
    <ScrollSettingsGroup />
  </>
);
