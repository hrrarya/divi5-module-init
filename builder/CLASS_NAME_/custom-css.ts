// WordPress dependencies.
import { __ } from "@wordpress/i18n";

import metadata from "./module.json";

const customCssFields = metadata.customCssFields as Record<
  "heading" | "content",
  { subName: string; selectorSuffix: string; label: string }
>;

// customCssFields.heading.label = __("Heading", "dnxte-divi-essential");
// customCssFields.content.label = __("Content", "dnxte-divi-essential");

export const cssFields = { ...customCssFields };
