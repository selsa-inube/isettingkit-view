import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { formatValue } from "@isettingkit/input";

interface IDynamicViewField {
  label: string;
  labelType?: string;
  type: ITextfieldInputType;
  valueInput: number | string;
}

declare const inputTypes: readonly [
  "alphabetical",
  "currency",
  "date",
  "number",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

const DynamicViewField = (props: IDynamicViewField) => {
  const { label, labelType = "condition", type, valueInput } = props;

  return (
    <Stack justifyContent="space-between" alignItems="center" width="100%">
      <Text
        type="label"
        weight="bold"
        size="medium"
        appearance={labelType === "condition" ? "gray" : "dark"}
      >
        {label}
      </Text>
      <Text
        type={labelType === "condition" ? "body" : "title"}
        size={labelType === "condition" ? "small" : "medium"}
        appearance={labelType === "condition" ? "dark" : "gray"}
      >
        {formatValue(valueInput, type)}
      </Text>
    </Stack>
  );
};

export { DynamicViewField };
export type { IDynamicViewField, ITextfieldInputType };
