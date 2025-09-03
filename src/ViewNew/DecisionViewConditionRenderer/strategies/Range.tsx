import { IRuleDecision } from "@isettingkit/input";
import { ViewRangeFieldNew } from "../../ViewRangeField";

interface IRangeStrategyNew {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: { from?: string; to?: string } | undefined;
  element: IRuleDecision;
}

const RangeStrategyNew = ({
  nameLabel,
  type,
  valueData,
  element,
}: IRangeStrategyNew) => {
  const valueFrom = valueData?.from || "0";
  const valueTo = valueData?.to || "0";

  return (
    <ViewRangeFieldNew
      labelFrom={nameLabel}
      labelType={type}
      typeInput={element.decisionDataType! || element.conditionDataType}
      valueFrom={valueFrom}
      valueTo={valueTo}
    />
  );
};

export { RangeStrategyNew };
export type { IRangeStrategyNew };
