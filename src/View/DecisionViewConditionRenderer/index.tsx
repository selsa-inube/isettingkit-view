/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICondition, IDecision, ValueHowToSetUp } from "@isettingkit/input";
import { DynamicViewField } from "../DynamicViewField";
import { ViewRangeField } from "../ViewRangeField";
import { ViewMultipleChoices } from "../ViewMultipleChoices";

interface IDecisionViewConditionRenderer {
  element: IDecision | ICondition;
  valueData:
    | string
    | number
    | { rangeFrom?: number | undefined; rangeTo?: number | undefined };
}

const DecisionViewConditionRenderer = (
  props: IDecisionViewConditionRenderer,
) => {
  const { element, valueData } = props;
  const name = element.name.replace(" ", "");
  const value: any = element.value;
  let valueRangeInput;
  const options =
    value && Array.isArray(value.list)
      ? value.list.map((item: string) => ({
          id: item,
          label: item,
          checked: value.listSelected?.includes(item),
        }))
      : [];

  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return (
        <ViewMultipleChoices
          id={name}
          label={element.label}
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
          label={element.label}
          labelFrom={valueRangeInput.labelFrom!}
          labelTo={valueRangeInput.labelTo!}
          typeInput={element.typeData}
          valueFrom={valueRangeInput.rangeFrom!}
          valueTo={valueRangeInput.rangeTo!}
        />
      );

    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <DynamicViewField
          label={element.label}
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
