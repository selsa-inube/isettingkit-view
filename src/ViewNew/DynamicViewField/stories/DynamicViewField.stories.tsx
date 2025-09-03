import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { DynamicViewFieldNew, IDynamicViewFieldNew } from "..";

const meta: Meta<typeof DynamicViewFieldNew> = {
  title: "components/view/DynamicViewFieldNew",
  component: DynamicViewFieldNew,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof DynamicViewFieldNew>;

const style = {
  width: "400px",
};

export const Default: Story = (args: IDynamicViewFieldNew) => (
  <div style={style}>
    <DynamicViewFieldNew {...args} />
  </div>
);
Default.args = {
  type: "number",
  label: "Antigüedad del cliente (Días)",
  labelType: "condition",
  valueInput: 720,
};

export default meta;
