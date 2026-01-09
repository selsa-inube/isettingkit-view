import {
  formatValue,
  IRuleDecision,
  useValidUntilManagement,
} from "@isettingkit/input";
import { ViewMultipleChoicesNew } from "../../ViewMultipleChoices";

interface IListOfValuesMultiStrategyNew {
  name: string;
  nameLabel: string;
  valueData: string[] | undefined;
  element: IRuleDecision;
  editionMode?: "classic" | "versioned";
}

const ListOfValuesMultiStrategyNew = ({
  name,
  nameLabel,
  valueData,
  element,
  editionMode,
}: IListOfValuesMultiStrategyNew) => {
  const { showModal, handleOnClick } = useValidUntilManagement(
    String(element.validUntil),
  );

  const type = element.decisionDataType! || element.conditionDataType;
  const options = Array.isArray(valueData)
    ? valueData.map((item, index) => ({
        checked: true,
        id: String(index + 1),
        label: String(formatValue(item, type)),
      }))
    : [];
  return (
    <ViewMultipleChoicesNew
      id={name}
      label={nameLabel}
      options={options}
      stillValid={element.validUntil ? true : false}
      showModal={showModal}
      handleOnClick={handleOnClick}
      validDate={String(element.validUntil)}
      showValidityIcon={editionMode === "versioned"}
    />
  );
};

export { ListOfValuesMultiStrategyNew };
export type { IListOfValuesMultiStrategyNew };
