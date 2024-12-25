import { __ } from "@wordpress/i18n";

export const bgTabOptions = {
  sub_toggle_color: {
    label: "Color",
    icon: "",
  },
  sub_toggle_gradient: {
    label: "Gradient",
    icon: "",
  },
};

export const __handleSubToggle = (
  e: React.MouseEvent<HTMLButtonElement>,
  setter: any,
) => {
  let target = e.target as HTMLButtonElement;
  var parent = target.parentElement;
  setter(target.value || (parent as HTMLButtonElement).value);
};

export const gradientPositions = {
  "circle at center": {
    label: __("Center", "dnxte-divi-essential"),
  },
  "circle at left": {
    label: __("Top Left", "dnxte-divi-essential"),
  },
  "circle at top": {
    label: __("Top", "dnxte-divi-essential"),
  },
  "circle at top right": {
    label: __("Top Right", "dnxte-divi-essential"),
  },
  "circle at right": {
    label: __("Right", "dnxte-divi-essential"),
  },
  "circle at bottom right": {
    label: __("Bottom Right", "dnxte-divi-essential"),
  },
  "circle at bottom": {
    label: __("Bottom", "dnxte-divi-essential"),
  },
  "circle at bottom left": {
    label: __("Bottom Left", "dnxte-divi-essential"),
  },
};

export const hoverEffects = {
  effect1: { label: __("Effect 1", "dnxte-divi-essential") },
  effect2: { label: __("Effect 2", "dnxte-divi-essential") },
  effect3: { label: __("Effect 3", "dnxte-divi-essential") },
  effect4: { label: __("Effect 4", "dnxte-divi-essential") },
  effect5: { label: __("Effect 5", "dnxte-divi-essential") },
  effect6: { label: __("Effect 6", "dnxte-divi-essential") },
  effect7: { label: __("Effect 7", "dnxte-divi-essential") },
  effect8: { label: __("Effect 8", "dnxte-divi-essential") },
  effect9: { label: __("Effect 9", "dnxte-divi-essential") },
  effect10: { label: __("Effect 10", "dnxte-divi-essential") },
  effect11: { label: __("Effect 11", "dnxte-divi-essential") },
  effect12: { label: __("Effect 12", "dnxte-divi-essential") },
  effect13: { label: __("Effect 13", "dnxte-divi-essential") },
};
