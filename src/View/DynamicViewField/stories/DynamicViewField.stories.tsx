import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { DynamicViewField, IDynamicViewField } from "..";

const meta: Meta<typeof DynamicViewField> = {
  title: "components/view/DynamicViewField",
  component: DynamicViewField,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof DynamicViewField>;

const style = {
  width: "400px",
};

export const Default: Story = (args: IDynamicViewField) => (
  <div style={style}>
    <DynamicViewField {...args} />
  </div>
);
Default.args = {
  type: "number",
  label: "Antigüedad del cliente (Días)",
  labelType: "condition",
  valueInput: 720,
};

export default meta;
