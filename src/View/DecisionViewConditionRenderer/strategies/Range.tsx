import { IRuleDecision } from "@isettingkit/input";
import { ViewRangeField } from "../../ViewRangeField";

interface IRangeStrategy {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: { from?: string; to?: string } | undefined;
  element: IRuleDecision;
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
      typeInput={element.decisionDataType! || element.conditionDataType}
      valueFrom={valueFrom}
      valueTo={valueTo}
    />
  );
};

export { RangeStrategy };
export type { IRangeStrategy };
