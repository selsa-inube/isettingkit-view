import { ICondition } from "../types";
import { DecisionViewConditionRenderer } from "..";

interface IDecisionConditionRendererController {
  element: ICondition;
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
