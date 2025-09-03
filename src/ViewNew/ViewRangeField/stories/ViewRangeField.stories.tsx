import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ViewRangeFieldNew, IViewRangeFieldNew } from "..";

const meta: Meta<typeof ViewRangeFieldNew> = {
  title: "components/view/ViewRangeFieldNew",
  component: ViewRangeFieldNew,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof ViewRangeFieldNew>;

const style = {
  width: "400px",
};

export const Currency: Story = (args: IViewRangeFieldNew) => (
  <div style={style}>
    <ViewRangeFieldNew {...args} />
  </div>
);
Currency.args = {
  valueFrom: 200000,
  valueTo: 400000,
  typeInput: "currency",
  labelFrom: "Desde",
};

export const Number: Story = (args: IViewRangeFieldNew) => (
  <div style={style}>
    <ViewRangeFieldNew {...args} />
  </div>
);
Number.args = {
  valueFrom: 0,
  valueTo: 0,
  typeInput: "number",
  labelFrom: "Desde",
};

export const Percentage: Story = (args: IViewRangeFieldNew) => (
  <div style={style}>
    <ViewRangeFieldNew {...args} />
  </div>
);
Percentage.args = {
  valueFrom: 4,
  valueTo: 8,
  typeInput: "percentage",
  labelFrom: "Tasa efectiva mínima",
  labelType: "decision",
};

export default meta;
