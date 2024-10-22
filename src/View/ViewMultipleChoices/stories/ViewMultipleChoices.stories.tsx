import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ViewMultipleChoices, ViewMultipleChoicesProps } from "..";

const options = [
  { id: "1", label: "Ocasionales", checked: true },
  { id: "2", label: "Frecuentes", checked: true },
  { id: "3", label: "Leales", checked: true },
  { id: "4", label: "Premium", checked: true },
  { id: "5", label: "Platinum", checked: true },
  { id: "6", label: "Plata", checked: true },
  { id: "7", label: "Potenciales", checked: true },
  { id: "8", label: "Inactivos", checked: true },
];

const meta: Meta<typeof ViewMultipleChoices> = {
  title: "components/view/ViewMultipleChoices",
  component: ViewMultipleChoices,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof ViewMultipleChoices>;

export const Default: Story = (args: ViewMultipleChoicesProps) => (
  <ViewMultipleChoices {...args} />
);
Default.args = {
  id: "MultipleOptionesCategorias",
  options: options,
};

export default meta;
