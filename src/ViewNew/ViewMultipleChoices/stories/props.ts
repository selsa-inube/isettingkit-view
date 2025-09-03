import { ArgTypes } from "@storybook/react";
import { IViewMultipleChoicesNew } from "..";

const parameters = {
  docs: {
    description: {
      component:
        "ViewMultipleChoices allows users to select multiple options from a list of available choices, displayed in a grid layout with tags.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props: Partial<ArgTypes<IViewMultipleChoicesNew>> = {
  id: {
    description:
      "A unique identifier for the **ViewMultipleChoices** component, used to differentiate between multiple instances of the component.",
    table: {
      type: { summary: "string" },
    },
  },
  label: {
    description:
      "The label displayed above the options list, describing what the options represent.",
    table: {
      type: { summary: "string" },
    },
  },
  options: {
    description:
      "An array of options, where each option is an object with an `id`, `label`, and an optional `checked` state.",
    table: {
      type: { summary: "IOptionItemChecked[]" },
    },
  },
};

export { parameters, props };
