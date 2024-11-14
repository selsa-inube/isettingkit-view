import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ViewRangeField, IViewRangeField } from "..";

const meta: Meta<typeof ViewRangeField> = {
  title: "components/view/ViewRangeField",
  component: ViewRangeField,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof ViewRangeField>;

const style = {
  width: "400px",
};

export const Currency: Story = (args: IViewRangeField) => (
  <div style={style}>
    <ViewRangeField {...args} />
  </div>
);
Currency.args = {
  valueFrom: 200000,
  valueTo: 400000,
  typeInput: "currency",
  labelFrom: "Desde",
};

export const Number: Story = (args: IViewRangeField) => (
  <div style={style}>
    <ViewRangeField {...args} />
  </div>
);
Number.args = {
  valueFrom: 0,
  valueTo: 0,
  typeInput: "number",
  labelFrom: "Desde",
};

export const Percentage: Story = (args: IViewRangeField) => (
  <div style={style}>
    <ViewRangeField {...args} />
  </div>
);
Percentage.args = {
  valueFrom: 4,
  valueTo: 8,
  typeInput: "percentage",
  labelFrom: "Tasa efectiva mínima",
};

export default meta;
