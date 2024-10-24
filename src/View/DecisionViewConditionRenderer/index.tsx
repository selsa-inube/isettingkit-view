import {
  ICondition,
  IDecision,
  IValue,
  ValueHowToSetUp,
} from "@isettingkit/input";
import { DynamicViewField } from "../DynamicViewField";
import { ViewRangeField } from "../ViewRangeField";
import { ViewMultipleChoices } from "../ViewMultipleChoices";

interface IDecisionViewConditionRenderer {
  element: IDecision | ICondition;
  valueData: string | string[] | number | IValue | undefined;
}

const DecisionViewConditionRenderer = (
  props: IDecisionViewConditionRenderer,
) => {
  const { element, valueData } = props;
  const name = element.name.replace(" ", "");

  let valueRangeInput;
  const selectedList = Array.isArray(valueData) ? valueData : [];
  const options = selectedList.map((item: string, index: number) => ({
    id: String(index + 1),
    label: item,
    checked: true,
  }));

  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return (
        <ViewMultipleChoices
          id={name}
          label={element.description}
          options={options}
        />
      );

    case ValueHowToSetUp.RANGE:
      valueRangeInput = valueData as {
        labelFrom?: string;
        labelTo?: string;
        rangeFrom?: string;
        rangeTo?: string;
      };
      return (
        <ViewRangeField
          labelFrom={
            valueRangeInput.labelFrom || `Minimum ${element.description}`
          }
          labelTo={valueRangeInput.labelTo || `Maximum ${element.description}`}
          typeInput={element.typeData}
          valueFrom={valueRangeInput.rangeFrom || 0}
          valueTo={valueRangeInput.rangeTo || 0}
        />
      );

    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <DynamicViewField
          label={element.description}
          type={element.typeData}
          valueInput={valueData as string | number}
        />
      );
    default:
      return null;
  }
};

export { DecisionViewConditionRenderer };
export type { IDecisionViewConditionRenderer };
