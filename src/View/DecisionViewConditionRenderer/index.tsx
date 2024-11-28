import React from "react";
import { IDecisionViewConditionRenderer } from "./types";
import { getStrategy, StrategyType } from "./utils";

function DecisionViewConditionRenderer(props: IDecisionViewConditionRenderer) {
  const { element, valueData, type } = props;

  const name = element.name.replace(" ", "");
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  const strategy = getStrategy(element.valueUse as StrategyType);

  if (!strategy) {
    console.error(`No strategy found for valueUse: ${element.valueUse}`);
    return null;
  }

  try {
    return React.createElement(strategy, {
      name,
      nameLabel,
      valueData,
      type,
      element,
    });
  } catch (error) {
    console.error(
      `Error rendering strategy for valueUse: ${element.valueUse}`,
      error,
    );
    return null;
  }
}

export { DecisionViewConditionRenderer };
export type { IDecisionViewConditionRenderer };
