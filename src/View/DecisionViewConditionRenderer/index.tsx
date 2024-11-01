import { IValue, ValueHowToSetUp } from "@isettingkit/input";
import { DynamicViewField } from "../DynamicViewField";
import { ViewRangeField } from "../ViewRangeField";
import { ViewMultipleChoices } from "../ViewMultipleChoices";
import { ICondition, IDecision } from "./types";

interface IDecisionViewConditionRenderer {
  element: IDecision | ICondition;
  valueData: string | string[] | number | IValue | undefined;
}

const DecisionViewConditionRenderer = (
  props: IDecisionViewConditionRenderer,
) => {
  const { element, valueData } = props;
  const name = element.name.replace(" ", "");
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");

  let valueRangeInput;
  const selectedList = Array.isArray(valueData) ? valueData : [];
  const options = selectedList.map((item: string, index: number) => ({
    id: String(index + 1),
    label: item,
    checked: true,
  }));

  switch (element.valueUse) {
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return (
        <ViewMultipleChoices id={name} label={nameLabel} options={options} />
      );

    case ValueHowToSetUp.RANGE:
      valueRangeInput = valueData as {
        labelFrom?: string;
        labelTo?: string;
        from?: string;
        to?: string;
      };
      return (
        <ViewRangeField
          labelFrom={valueRangeInput.labelFrom || `Minimum ${nameLabel}`}
          labelTo={valueRangeInput.labelTo || `Maximum ${nameLabel}`}
          typeInput={element.dataType}
          valueFrom={valueRangeInput.from || 0}
          valueTo={valueRangeInput.to || 0}
        />
      );

    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <DynamicViewField
          label={nameLabel}
          type={element.dataType}
          valueInput={valueData as string | number}
        />
      );
    default:
      return null;
  }
};

export { DecisionViewConditionRenderer };
export type { IDecisionViewConditionRenderer };
