const parameters = {
  docs: {
    description: {
      component:
        "ViewRangeField displays two values, typically representing a range, formatted according to the input type.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  label: {
    description:
      "The main label displayed above the range fields, describing the overall range.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  labelFrom: {
    description:
      "The label displayed above the 'from' value, indicating the starting value of the range.",
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
  labelTo: {
    description:
      "The label displayed above the 'to' value, indicating the ending value of the range.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  typeInput: {
    description:
      "The type of input used to format the range values, e.g., 'alphabetical', 'date', 'currency', etc.",
    table: {
      type: {
        summary: "ITextfieldInputType",
      },
    },
  },
  valueFrom: {
    description:
      "The starting value of the range, formatted based on the typeInput.",
    table: {
      type: {
        summary: "string | number",
      },
    },
  },
  valueTo: {
    description:
      "The ending value of the range, formatted based on the typeInput.",
    table: {
      type: {
        summary: "string | number",
      },
    },
  },
};

export { parameters, props };
