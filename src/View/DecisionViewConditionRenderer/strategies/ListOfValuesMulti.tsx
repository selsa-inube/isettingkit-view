import { ViewMultipleChoices } from "../../ViewMultipleChoices";

interface IListOfValuesMultiStrategy {
  name: string;
  nameLabel: string;
  valueData: string[] | undefined;
}

const ListOfValuesMultiStrategy = ({
  name,
  nameLabel,
  valueData,
}: IListOfValuesMultiStrategy) => {
  const options = Array.isArray(valueData)
    ? valueData.map((item, index) => ({
        checked: true,
        id: String(index + 1),
        label: item,
      }))
    : [];

  return <ViewMultipleChoices id={name} label={nameLabel} options={options} />;
};

export { ListOfValuesMultiStrategy };
export type { IListOfValuesMultiStrategy };
