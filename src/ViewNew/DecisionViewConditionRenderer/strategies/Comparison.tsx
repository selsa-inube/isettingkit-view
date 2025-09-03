import { IRuleDecision } from "@isettingkit/input";
import { DynamicViewFieldNew } from "../../DynamicViewField";

interface IComparisonStrategyNew {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: string | number | undefined;
  element: IRuleDecision;
}

const ComparisonStrategyNew = ({
  nameLabel,
  type,
  valueData,
  element,
}: IComparisonStrategyNew) => {
  return (
    <DynamicViewFieldNew
      label={nameLabel}
      labelType={type}
      type={element.decisionDataType! || element.conditionDataType}
      valueInput={valueData as string | number}
    />
  );
};

export { ComparisonStrategyNew };
export type { IComparisonStrategyNew };
