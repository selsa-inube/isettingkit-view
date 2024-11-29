import { ViewRangeField } from "../../ViewRangeField";
import { ICondition, IDecision } from "../types";

interface IRangeStrategy {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: { from?: string; to?: string } | undefined;
  element: IDecision | ICondition;
}

const RangeStrategy = ({
  nameLabel,
  type,
  valueData,
  element,
}: IRangeStrategy) => {
  const valueFrom = valueData?.from || "0";
  const valueTo = valueData?.to || "0";

  return (
    <ViewRangeField
      labelFrom={nameLabel}
      labelType={type}
      typeInput={element.dataType}
      valueFrom={valueFrom}
      valueTo={valueTo}
    />
  );
};

export { RangeStrategy };
export type { IRangeStrategy };
