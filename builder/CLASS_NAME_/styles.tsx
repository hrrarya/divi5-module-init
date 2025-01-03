// External dependencies.
import React, { ReactElement } from "react";

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
  TextStyle,
} from "@divi/module";

import { type Element } from "@divi/types";

// Local dependencies.
import { CLASS_NAME_Attrs } from "./types";
import { cssFields } from "./custom-css";
import { GradientStyle } from "./helpers/common";

/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements,
}: StylesProps<CLASS_NAME_Attrs>): ReactElement => {
  


  // Color
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: "module",
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={`${orderClass} .example_d4_module_inner`}
        attr={attrs?.module?.advanced?.text}
      />
      {
        // Set the `.example_d4_module_inner` element `position` to `relative` if the background image has parallax enabled.
      }
      <CommonStyle
        selector={`${orderClass} .example_d4_module_inner`}
        attr={attrs?.module?.decoration?.background}
        declarationFunction={({
          attrValue,
        }: {
          attrValue: Element.Decoration.Background.AttributeValue;
        }) => {
          if ("on" === attrValue?.image?.parallax?.enabled) {
            return "position: relative;";
          }

          return "";
        }}
      />
      <CssStyle selector={orderClass} attr={attrs?.css} cssFields={cssFields} />

      {/*{elements.style({
        attrName: "heading",
      })}
      {elements.style({
        attrName: "content",
      })}*/}

      {/*
      <GradientStyle
        attrs={attrs}
        slug="hoverGradient"
        selector={`${orderClass} .dnext-neip-ihb .neip-ihb-info`}
      />*/}
    </StyleContainer>
  );
};

export { ModuleStyles };
