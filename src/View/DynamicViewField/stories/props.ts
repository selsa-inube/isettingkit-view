import { ArgTypes } from "@storybook/react";
import { IDynamicViewField } from "..";

const parameters = {
  docs: {
    description: {
      component:
        "DynamicViewField displays a formatted value based on the input type and label.",
    },
  },
};

const props: Partial<ArgTypes<IDynamicViewField>> = {
  type: {
    description:
      "Specifies the type of the input value to format, e.g., 'alphabetical', 'date', 'currency', etc.",
    table: {
      type: {
        summary: "ITextfieldInputType",
      },
    },
  },
  label: {
    description: "The label displayed above the value.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  labelType: {
    options: ["condition", "decision"],
    description:
      "The type of label to display, either 'condition' or 'decision'.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  valueInput: {
    description:
      "The value to be displayed, which is formatted based on the 'type'.",
    table: {
      type: {
        summary: "number | string",
      },
    },
  },
};

export { parameters, props };
