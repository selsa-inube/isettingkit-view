import { IDecisionViewConditionRendererNew } from "./types";
import { getStrategyNew, StrategyType } from "./utils";
import { normalizeValueUseNew } from "./utils/normalizeValueUse";

const DecisionViewConditionRendererNew = (
  props: IDecisionViewConditionRendererNew,
) => {
  const { element, valueData, type, editionMode } = props;
  const normalizedValueUse = normalizeValueUseNew(
    element.howToSetTheDecision! || element.howToSetTheCondition,
  );

  if (!normalizedValueUse) {
    console.error(
      `Invalid valueUse: ${element.howToSetTheDecision || element.howToSetTheCondition}. Please ensure it matches the supported types.`,
    );
    return null;
  }
  const strategy = getStrategyNew(normalizedValueUse as StrategyType);

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
      editionMode?: string;
    }>;

    return (
      <StrategyComponent
        name={element.ruleName || element.conditionName!}
        nameLabel={element.labelName!}
        valueData={valueData}
        type={type}
        element={element}
        editionMode={editionMode}
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

export { DecisionViewConditionRendererNew };
export type { IDecisionViewConditionRendererNew };
