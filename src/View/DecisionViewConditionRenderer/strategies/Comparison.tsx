import { IRuleDecision } from "@isettingkit/input";
import { DynamicViewField } from "../../DynamicViewField";

interface IComparisonStrategy {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: string | number | undefined;
  element: IRuleDecision;
}

const ComparisonStrategy = ({
  nameLabel,
  type,
  valueData,
  element,
}: IComparisonStrategy) => {
  return (
    <DynamicViewField
      label={nameLabel}
      labelType={type}
      type={element.decisionDataType! || element.conditionDataType}
      valueInput={valueData as string | number}
    />
  );
};

export { ComparisonStrategy };
export type { IComparisonStrategy };
