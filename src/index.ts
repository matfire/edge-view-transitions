import type { PluginFn } from "edge.js/types";
import { transitionName } from "./globals/transitionName.js";
import { transitionGroup } from "./globals/transitionGroup.js";

export const edgeViewTransitions: PluginFn<{}> = (edge) => {
  edge.global("transitionName", transitionName);
  edge.global("transitionGroup", transitionGroup);
};
