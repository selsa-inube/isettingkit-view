import { DynamicViewField } from "../../DynamicViewField";
import { IDecision, ICondition } from "../types";

interface IComparisonStrategy {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: string | number | undefined;
  element: IDecision | ICondition;
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
      type={element.dataType}
      valueInput={valueData as string | number}
    />
  );
};

export { ComparisonStrategy };
export type { IComparisonStrategy };
