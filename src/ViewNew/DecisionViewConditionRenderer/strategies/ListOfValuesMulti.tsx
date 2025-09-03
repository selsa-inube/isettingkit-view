import { ViewMultipleChoicesNew } from "../../ViewMultipleChoices";

interface IListOfValuesMultiStrategyNew {
  name: string;
  nameLabel: string;
  valueData: string[] | undefined;
}

const ListOfValuesMultiStrategyNew = ({
  name,
  nameLabel,
  valueData,
}: IListOfValuesMultiStrategyNew) => {
  const options = Array.isArray(valueData)
    ? valueData.map((item, index) => ({
        checked: true,
        id: String(index + 1),
        label: item,
      }))
    : [];

  return (
    <ViewMultipleChoicesNew id={name} label={nameLabel} options={options} />
  );
};

export { ListOfValuesMultiStrategyNew };
export type { IListOfValuesMultiStrategyNew };
