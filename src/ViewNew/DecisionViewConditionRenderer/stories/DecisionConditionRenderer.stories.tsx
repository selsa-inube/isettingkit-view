import { Meta, StoryObj } from "@storybook/react";
import { DecisionViewConditionRendererNew } from "..";
import { ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const meta: Meta<typeof DecisionViewConditionRendererNew> = {
  title: "components/view/DecisionViewConditionRendererNew",
  component: DecisionViewConditionRendererNew,
};

type Story = StoryObj<typeof DecisionViewConditionRendererNew>;

const element = {
  conditionName: "exampleCondition",
  labelName: "Example Condition",
  value: ["Option1"],
  listOfPossibleValues: { list: ["Option1", "200", "Option3"] },
  howToSetTheCondition: ValueHowToSetUp.LIST_OF_VALUES,
  conditionDataType: ValueDataType.PERCENTAGE,
  validUntil: "2025-11-11",
};

const ListOfValues: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.LIST_OF_VALUES,
    },
    valueData: "Option1",
    type: "condition",
  },
};

const MultipleChoices: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    valueData: ["indepenent", "property", "freedom1", "123000"],
    type: "condition",
  },
};

const Range: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.RANGE,
      conditionDataType: ValueDataType.MONETARY,
    },
    type: "decision",
    valueData: { from: 14.2, to: 21.5 },
  },
};

const GreaterThan: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.GREATER_THAN,
      conditionDataType: ValueDataType.PERCENTAGE,
    },
    type: "decision",
    valueData: 12,
  },
};

const Equal: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.EQUAL,
      conditionDataType: ValueDataType.ALPHABETICAL,
    },
    valueData: "Option1",
    type: "decision",
  },
};

const LessThan: Story = {
  args: {
    element: {
      ...element,
      howToSetTheCondition: ValueHowToSetUp.LESS_THAN,
      conditionDataType: ValueDataType.NUMBER,
    },
    type: "decision",
    valueData: "0",
  },
};

export { ListOfValues, MultipleChoices, Range, GreaterThan, Equal, LessThan };
export default meta;
