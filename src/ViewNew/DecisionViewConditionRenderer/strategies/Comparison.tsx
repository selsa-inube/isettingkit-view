import { IRuleDecision, useValidUntilManagement } from "@isettingkit/input";
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
  const { showModal, handleOnClick } = useValidUntilManagement(
    String(element.validUntil),
  );

  return (
    <DynamicViewFieldNew
      label={nameLabel}
      labelType={type}
      type={element.decisionDataType! || element.conditionDataType}
      valueInput={valueData as string | number}
      stillValid={element.validUntil ? true : false}
      showModal={showModal}
      handleOnClick={handleOnClick}
      validDate={String(element.validUntil)}
    />
  );
};

export { ComparisonStrategyNew };
export type { IComparisonStrategyNew };
