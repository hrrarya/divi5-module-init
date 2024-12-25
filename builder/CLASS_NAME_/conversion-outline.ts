/* eslint-disable @typescript-eslint/naming-convention */
import { ModuleConversionOutline } from "@divi/types";

// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields

export const conversionOutline: ModuleConversionOutline = {
  advanced: {
    admin_label: "module.meta.adminLabel",
    animation: "module.decoration.animation",
    background: "module.decoration.background",
    borders: {
      default: "module.decoration.border",
    },
    box_shadow: {
      default: "module.decoration.boxShadow",
    },
    disabled_on: "module.decoration.disabledOn",
    filters: {
      default: "module.decoration.filters",
    },
    fonts: {
      hover_text_fonts: "heading.decoration.font",
      dnxtiep_ihb_body: "content.decoration.font",
    },
    height: "module.decoration.sizing",
    link_options: "module.advanced.link",
    margin_padding: "module.decoration.spacing",
    max_width: "module.decoration.sizing",
    module: "module.advanced.htmlAttributes",
    overflow: "module.decoration.overflow",
    position_fields: "module.decoration.position",
    scroll: "module.decoration.scroll",
    sticky: "module.decoration.sticky",
    text: "module.advanced.text",
    text_shadow: {
      default: "module.advanced.text.textShadow",
    },
    transform: "module.decoration.transform",
    transition: "module.decoration.transition",
    z_index: "module.decoration.zIndex",
  },
  css: {
    after: "css.*.after",
    before: "css.*.before",
    main_element: "css.*.mainElement",
    content: "css.*.content",
    title: "css.*.title",
  },
  module: {
    // here will be divi 4 module slugs
  },
};
