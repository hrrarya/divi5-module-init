// External Dependencies.
import React, { ReactElement } from "react";

// Divi Dependencies.
import { ModuleContainer, ElementComponents, DynamicData } from "@divi/module";
import { getAttrByMode } from "@divi/module-utils";

// Local Dependencies.
import { CLASS_NAME_EditProps } from "./types";
import { ModuleStyles } from "./styles";
import { moduleClassnames } from "./module-classnames";
import { ModuleScriptData } from "./module-script-data";

/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {CLASS_NAME_EditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const CLASS_NAME_Edit = (
  props: CLASS_NAME_EditProps
): ReactElement => {
  const { attrs, id, name, elements } = props;

  

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {elements.styleComponents({
        attrName: "module",
      })}
      {/* here will be your code */}
    </ModuleContainer>
  );
};

export { CLASS_NAME_Edit };
