// Divi dependencies.
import { ModuleEditProps } from "@divi/module-library";
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from "@divi/types";

export interface CLASS_NAME_Attr extends Module.Css.AttributeValue {
  title?: string;
  content?: string;
}

export type CLASS_NAME_CssGroupAttr =
  FormatBreakpointStateAttr<CLASS_NAME_Attr>;

export interface CLASS_NAME_Attrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: CLASS_NAME_CssGroupAttr;

  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
      link?: Element.Advanced.Link.Attributes;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
      text?: Element.Advanced.Text.Attributes;
    };
    decoration?: Element.Decoration.PickedAttributes<
      | "animation"
      | "background"
      | "border"
      | "boxShadow"
      | "disabledOn"
      | "filters"
      | "overflow"
      | "position"
      | "scroll"
      | "sizing"
      | "spacing"
      | "sticky"
      | "transform"
      | "transition"
      | "zIndex"
    >;
  };
  
  // Titless
  headingText?: Element.Types.Title.Attributes & {
    innerContent: FormatBreakpointStateAttr<{
      tag?: any;
    }>;
  };
  // Image
  image?: {
    innerContent?: Element.Types.Image.InnerContent.Attributes;
  };
  dnxtiep_ihb_hover_bg_show_hide?: object | any;
  dnxtiep_ihb_heading_bg_show_hide?: object | any;

  // Reveal Color Gradient
  hoverGradient?: {
    advanced?: {
      colorUse?: FormatBreakpointStateAttr<string>;
      singleColorOne?: FormatBreakpointStateAttr<string>;
      gradientUse?: FormatBreakpointStateAttr<string>;
      colorOne?: FormatBreakpointStateAttr<string>;
      colorTwo?: FormatBreakpointStateAttr<string>;
      gradientType?: FormatBreakpointStateAttr<string>;
      gradientLinerDirection?: FormatBreakpointStateAttr<string>;
      gradientRadialDirection?: FormatBreakpointStateAttr<string>;
      startPos?: FormatBreakpointStateAttr<string>;
      endPos?: FormatBreakpointStateAttr<string>;
    };
  };
}

export type CLASS_NAME_EditProps =
  ModuleEditProps<CLASS_NAME_Attrs>;
