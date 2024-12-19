import { IRuleDecision } from "@isettingkit/input";
import { DecisionViewConditionRenderer } from "..";

interface IDecisionConditionRendererController {
  element: IRuleDecision;
  valueData: string | number | { from?: number; to?: number };
  type?: "decision" | "condition";
}

const DecisionConditionRendererController = ({
  element,
  valueData,
  type,
}: IDecisionConditionRendererController) => {
  return (
    <DecisionViewConditionRenderer
      element={element}
      valueData={valueData}
      type={type}
    />
  );
};

export { DecisionConditionRendererController };
