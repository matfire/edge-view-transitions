import type { PluginFn } from "edge.js/types";
import { transitionName } from "./transitionName.js";

export const edgeViewTransitions: PluginFn<{}> = (edge) => {
  edge.global("transitionName", transitionName);
};
