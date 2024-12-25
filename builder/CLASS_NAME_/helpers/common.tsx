import {
  ColorPickerContainer,
  RangeContainer,
  SelectContainer,
} from "@divi/field-library";
import { ToggleContainer } from "@divi/field-library";
import { CommonStyle, FieldContainer } from "@divi/module";
import { __ } from "@wordpress/i18n";
import React from "react";
import { gradientPositions } from ".";

export const GradientBackground = (props: any) => {
  const { slug, title, visible, attrs, defaultSettingsAttrs } = props;
  // console.info(attrs);
  const useGradient =
    "on" === attrs?.[slug]?.advanced?.gradientUse?.desktop?.value;
  const selectGradientType =
    attrs?.[slug]?.advanced?.gradientType?.desktop?.value ||
    defaultSettingsAttrs?.[slug]?.advanced?.gradientType?.desktop?.value;

  return (
    <>
      <FieldContainer
        attrName={`${slug}.advanced.gradientUse`}
        label={title + __(" Gradient Background", "dnxte-divi-essential")}
        description={__("Choose gradient", "dnxte-divi-essential")}
        visible={visible}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.gradientUse}
      >
        <ToggleContainer />
      </FieldContainer>
      <FieldContainer
        attrName={`${slug}.advanced.colorOne`}
        label={__("Select Color One", "dnxte-divi-essential")}
        description={__("Add Background", "dnxte-divi-essential")}
        visible={visible && useGradient}
        features={{ sticky: false, hover: true, responsive: true }}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.colorOne}
      >
        <ColorPickerContainer />
      </FieldContainer>
      <FieldContainer
        attrName={`${slug}.advanced.colorTwo`}
        label={__("Select Color One", "dnxte-divi-essential")}
        description={__("Add Background", "dnxte-divi-essential")}
        visible={visible && useGradient}
        features={{ sticky: false, hover: true, responsive: true }}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.colorTwo}
      >
        <ColorPickerContainer />
      </FieldContainer>
      <FieldContainer
        attrName={`${slug}.advanced.gradientType`}
        label={__("Select Gradient Type", "dnxte-divi-essential")}
        description={__("Select the types of gradient", "dnxte-divi-essential")}
        visible={visible && useGradient}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.gradientType}
        // features={{ sticky: false, hover: true, responsive: true }}
      >
        <SelectContainer
          options={{
            "linear-gradient": { label: __("Linear", "dnxte-divi-essential") },
            "radial-gradient": { label: __("Radial", "dnxte-divi-essential") },
          }}
          defaultValue={
            defaultSettingsAttrs?.[slug]?.advanced?.gradientType?.desktop?.value
          }
          displayCheckMark={true}
        />
      </FieldContainer>
      <FieldContainer
        label={__("Linear Direction", "dnxte-divi-essential")}
        attrName={`${slug}.advanced.gradientLinerDirection`}
        description={__(
          "Select the linear direction you want",
          "dnxte-divi-essential"
        )}
        features={{
          sticky: false,
          dynamicContent: { type: "text" },
        }}
        visible={
          visible && "linear-gradient" === selectGradientType && useGradient
        }
        defaultAttr={
          defaultSettingsAttrs?.[slug]?.advanced?.gradientLinerDirection
        }
      >
        <RangeContainer
          value="180"
          defaultValue="180"
          defaultUnit="deg"
          min={1}
          max={360}
          step={1}
        />
      </FieldContainer>

      <FieldContainer
        label={__("Radial Direction", "dnxte-divi-essential")}
        attrName={`${slug}.advanced.gradientRadialDirection`}
        description={__(
          "Select the linear direction you want",
          "dnxte-divi-essential"
        )}
        features={{
          sticky: false,
          dynamicContent: { type: "text" },
        }}
        visible={
          visible &&
          "radial-gradient" === (selectGradientType || "linear-gradient") &&
          useGradient
        }
        defaultAttr={
          defaultSettingsAttrs?.[slug]?.advanced?.gradientRadialDirection
        }
      >
        <SelectContainer
          options={gradientPositions}
          defaultValue="cricle at center"
          displayCheckMark={true}
        />
      </FieldContainer>
      <FieldContainer
        label={__("Start Position", "dnxte-divi-essential")}
        attrName={`${slug}.advanced.startPos`}
        description={__("Select the range value", "dnxte-divi-essential")}
        features={{
          sticky: false,
          dynamicContent: { type: "text" },
        }}
        visible={useGradient && visible}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.startPos}
      >
        <RangeContainer
          min={0}
          max={100}
          step={1}
          defaultUnit="%"
          defaultValue="100%"
          value="100"
        />
      </FieldContainer>
      <FieldContainer
        label={__("End Position", "dnxte-divi-essential")}
        attrName={`${slug}.advanced.endPos`}
        description={__("Select the range value", "dnxte-divi-essential")}
        features={{
          sticky: false,
          dynamicContent: { type: "text" },
        }}
        visible={useGradient && visible}
        defaultAttr={defaultSettingsAttrs?.[slug]?.advanced?.endPos}
      >
        <RangeContainer
          min={0}
          max={100}
          step={1}
          defaultUnit="%"
          defaultValue="100%"
          value="100"
        />
      </FieldContainer>
    </>
  );
};

export const GradientStyle = (props: any) => {
  const { attrs, slug, selector } = props;
  const colorUse = attrs?.[slug]?.advanced?.colorUse?.desktop?.value;

  const gradientUse = attrs?.[slug]?.advanced?.gradientUse?.desktop?.value;

  const colorGradientType =
    attrs?.[slug]?.advanced?.gradientType?.desktop?.value ?? "";
  const gradientLinerDirection =
    attrs?.[slug]?.advanced?.gradientLinerDirection?.desktop?.value ?? "";
  const gradientRadialDirection =
    attrs?.[slug]?.advanced?.gradientRadialDirection?.desktop?.value ?? "";

  const gradientApply =
    "linear-gradient" === colorGradientType
      ? gradientLinerDirection
      : gradientRadialDirection;

  // Color
  const colorOne = attrs?.[slug]?.advanced?.colorOne?.desktop?.value ?? "";
  const startPos = attrs?.[slug]?.advanced?.startPos?.desktop?.value ?? "";
  const colorTwo = attrs?.[slug]?.advanced?.colorTwo?.desktop?.value ?? "";
  const endPos = attrs?.[slug]?.advanced?.endPos?.desktop?.value ?? "";

  if ("on" === gradientUse) {
    // console.info({ gradientUse });
    return (
      <CommonStyle
        selector={selector}
        property={`background: ${colorGradientType}(${gradientApply}, ${colorOne} ${startPos}, ${colorTwo} ${endPos});`}
        attr={attrs?.[slug]?.advanced?.gradientType}
      />
    );
  }

  if ("on" === colorUse) {
    // console.info({ colorUse });
    return (
      <CommonStyle
        selector={selector}
        property={"background-color"}
        attr={attrs?.[slug]?.advanced?.singleColorOne}
      />
    );
  }
  return "";
};
