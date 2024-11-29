import React from "react";
import { IDecisionViewConditionRenderer } from "./types";
import { getStrategy, StrategyType } from "./utils";
import { normalizeValueUse } from "./utils/normalizeValueUse";

function DecisionViewConditionRenderer(props: IDecisionViewConditionRenderer) {
  const { element, valueData, type } = props;

  const name = element.name.replace(" ", "");
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  const normalizedValueUse = normalizeValueUse(element.valueUse);

  if (!normalizedValueUse) {
    console.error(
      `Invalid valueUse: ${element.valueUse}. Please ensure it matches the supported types.`,
    );
    return null;
  }

  const strategy = getStrategy(normalizedValueUse as StrategyType);

  if (!strategy) {
    console.error(`No strategy found for valueUse: ${element.valueUse}`);
    return null;
  }

  try {
    const StrategyComponent = strategy as React.ComponentType<{
      name: string;
      nameLabel: string;
      valueData: unknown;
      type?: string;
      element: typeof element;
    }>;

    return (
      <StrategyComponent
        name={name}
        nameLabel={nameLabel}
        valueData={valueData}
        type={type}
        element={element}
      />
    );
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
