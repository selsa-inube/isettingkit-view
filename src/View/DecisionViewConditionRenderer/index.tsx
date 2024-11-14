import { IValue, ValueHowToSetUp } from "@isettingkit/input";
import { DynamicViewField } from "../DynamicViewField";
import { ViewMultipleChoices } from "../ViewMultipleChoices";
import { ViewRangeField } from "../ViewRangeField";
import { ICondition, IDecision } from "./types";

interface IDecisionViewConditionRenderer {
  element: IDecision | ICondition;
  type?: "decision" | "condition";
  valueData: string | string[] | number | IValue | undefined;
}

const DecisionViewConditionRenderer = (
  props: IDecisionViewConditionRenderer,
) => {
  const { element, type, valueData } = props;
  const name = element.name.replace(" ", "");
  const nameLabel = element.name.split(/(?=[A-Z])/).join(" ");

  let valueRangeInput;
  const selectedList = Array.isArray(valueData) ? valueData : [];
  const options = selectedList.map((item: string, index: number) => ({
    checked: true,
    id: String(index + 1),
    label: item,
  }));

  switch (element.valueUse) {
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return (
        <ViewMultipleChoices id={name} label={nameLabel} options={options} />
      );

    case ValueHowToSetUp.RANGE:
      valueRangeInput = valueData as {
        from?: string;
        to?: string;
      };
      return (
        <ViewRangeField
          labelFrom={nameLabel}
          labelType={type}
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
          labelType={type}
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
