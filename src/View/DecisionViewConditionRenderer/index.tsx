import { IDecisionViewConditionRenderer } from "./types";
import { getStrategy, StrategyType } from "./utils";
import { normalizeValueUse } from "./utils/normalizeValueUse";

const DecisionViewConditionRenderer = (
  props: IDecisionViewConditionRenderer,
) => {
  const { element, valueData, type } = props;
  const normalizedValueUse = normalizeValueUse(
    element.howToSetTheDecision! || element.howToSetTheCondition,
  );

  if (!normalizedValueUse) {
    console.error(
      `Invalid valueUse: ${element.howToSetTheDecision || element.howToSetTheCondition}. Please ensure it matches the supported types.`,
    );
    return null;
  }

  const strategy = getStrategy(normalizedValueUse as StrategyType);

  if (!strategy) {
    console.error(
      `No strategy found for valueUse: ${element.howToSetTheDecision}`,
    );
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
        name={element.ruleName || element.conditionName!}
        nameLabel={element.labelName!}
        valueData={valueData}
        type={type}
        element={element}
      />
    );
  } catch (error) {
    console.error(
      `Error rendering strategy for howToSetTheDecision: ${element.howToSetTheDecision}`,
      error,
    );
    return null;
  }
};

export { DecisionViewConditionRenderer };
export type { IDecisionViewConditionRenderer };
