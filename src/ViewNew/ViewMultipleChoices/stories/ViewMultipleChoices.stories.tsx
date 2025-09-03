import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ViewMultipleChoicesNew, IViewMultipleChoicesNew } from "..";

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

const meta: Meta<typeof ViewMultipleChoicesNew> = {
  title: "components/view/ViewMultipleChoicesNew",
  component: ViewMultipleChoicesNew,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof ViewMultipleChoicesNew>;

const Default: Story = (args: IViewMultipleChoicesNew) => (
  <ViewMultipleChoicesNew {...args} />
);
Default.args = {
  id: "MultipleOptionesCategorias",
  label: "Categorias",
  options: options,
};
export { Default };
export default meta;
