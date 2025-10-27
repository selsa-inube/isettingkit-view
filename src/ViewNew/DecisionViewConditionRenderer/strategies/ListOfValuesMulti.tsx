import { formatValue, IRuleDecision } from "@isettingkit/input";
import { ViewMultipleChoicesNew } from "../../ViewMultipleChoices";

interface IListOfValuesMultiStrategyNew {
  name: string;
  nameLabel: string;
  valueData: string[] | undefined;
  element: IRuleDecision;
}

const ListOfValuesMultiStrategyNew = ({
  name,
  nameLabel,
  valueData,
  element,
}: IListOfValuesMultiStrategyNew) => {
  const type = element.decisionDataType! || element.conditionDataType;
  const options = Array.isArray(valueData)
    ? valueData.map((item, index) => ({
        checked: true,
        id: String(index + 1),
        label: String(formatValue(item, type)),
      }))
    : [];
  return (
    <ViewMultipleChoicesNew id={name} label={nameLabel} options={options} />
  );
};

export { ListOfValuesMultiStrategyNew };
export type { IListOfValuesMultiStrategyNew };
