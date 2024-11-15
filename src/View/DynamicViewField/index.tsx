import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
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
    <Stack
      direction="column"
      gap="2px"
      alignItems={labelType === "condition" ? "flex-start" : "center"}
    >
      <Text
        type="label"
        weight="bold"
        size={labelType === "condition" ? "medium" : "large"}
        appearance="dark"
      >
        {label}
      </Text>
      {labelType === "condition" ? (
        <Text type="body" size="medium" appearance="gray">
          {formatValue(valueInput, type)}
        </Text>
      ) : (
        <Text type="label" size="large" appearance="gray">
          {formatValue(valueInput, type)}
        </Text>
      )}
    </Stack>
  );
};

export { DynamicViewField };
export type { IDynamicViewField, ITextfieldInputType };
