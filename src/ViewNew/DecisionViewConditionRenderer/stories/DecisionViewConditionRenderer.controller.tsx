import { IRuleDecision } from "@isettingkit/input";
import { DecisionViewConditionRendererNew } from "..";

interface IDecisionConditionRendererControllerNew {
  element: IRuleDecision;
  valueData: string | number | { from?: number; to?: number };
  type?: "decision" | "condition";
}

const DecisionConditionRendererControllerNew = ({
  element,
  valueData,
  type,
}: IDecisionConditionRendererControllerNew) => {
  return (
    <DecisionViewConditionRendererNew
      element={element}
      valueData={valueData}
      type={type}
    />
  );
};

export { DecisionConditionRendererControllerNew };
