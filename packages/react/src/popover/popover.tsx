const SUPPORTS_NATIVE =
  "popover" in HTMLElement.prototype &&
  "showPopover" in HTMLElement.prototype &&
  typeof HTMLElement.prototype.showPopover === "function";
