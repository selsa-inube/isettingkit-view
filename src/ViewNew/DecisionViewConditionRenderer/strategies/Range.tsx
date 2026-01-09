import { IRuleDecision, useValidUntilManagement } from "@isettingkit/input";
import { ViewRangeFieldNew } from "../../ViewRangeField";

interface IRangeStrategyNew {
  nameLabel: string;
  type?: "decision" | "condition";
  valueData: { from?: string; to?: string } | undefined;
  element: IRuleDecision;
  editionMode?: "classic" | "versioned";
}

const RangeStrategyNew = ({
  nameLabel,
  type,
  valueData,
  element,
  editionMode,
}: IRangeStrategyNew) => {
  const { showModal, handleOnClick } = useValidUntilManagement(
    String(element.validUntil),
  );

  const valueFrom = valueData?.from || "0";
  const valueTo = valueData?.to || "0";

  return (
    <ViewRangeFieldNew
      labelFrom={nameLabel}
      labelType={type}
      typeInput={element.decisionDataType! || element.conditionDataType}
      valueFrom={valueFrom}
      valueTo={valueTo}
      stillValid={element.validUntil ? true : false}
      showModal={showModal}
      handleOnClick={handleOnClick}
      validDate={String(element.validUntil)}
      showValidityIcon={editionMode === "versioned"}
    />
  );
};

export { RangeStrategyNew };
export type { IRangeStrategyNew };
