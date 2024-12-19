import { Meta, StoryObj } from "@storybook/react";
import { DecisionViewConditionRenderer } from "..";
import { ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const meta: Meta<typeof DecisionViewConditionRenderer> = {
  title: "components/view/DecisionViewConditionRenderer",
  component: DecisionViewConditionRenderer,
};

type Story = StoryObj<typeof DecisionViewConditionRenderer>;

const element = {
  name: "exampleCondition",
  value: ["Option1"],
  possibleValue: { list: ["Option1", "Option2", "Option3"] },
  valueUse: ValueHowToSetUp.LIST_OF_VALUES,
  dataType: ValueDataType.ALPHABETICAL,
};

const ListOfValues: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    },
    valueData: "Option1",
    type: "condition",
  },
};

const MultipleChoices: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    valueData: ["indepenent", "property"],
    type: "condition",
  },
};

const Range: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.RANGE,
      dataType: ValueDataType.PERCENTAGE,
    },
    type: "decision",
    valueData: { from: 1, to: 10 },
  },
};

const GreaterThan: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.GREATER_THAN,
      dataType: ValueDataType.PERCENTAGE,
    },
    type: "decision",
    valueData: 12,
  },
};

const Equal: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.EQUAL,
      dataType: ValueDataType.ALPHABETICAL,
    },
    valueData: "Option1",
    type: "decision",
  },
};

const LessThan: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LESS_THAN,
      dataType: ValueDataType.NUMBER,
    },
    type: "decision",
    valueData: "0",
  },
};

export { ListOfValues, MultipleChoices, Range, GreaterThan, Equal, LessThan };
export default meta;
