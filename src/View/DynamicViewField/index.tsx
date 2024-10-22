import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { formatValue } from "@isettingkit/input";

interface IDynamicViewField {
  type: ITextfieldInputType;
  label: string;
  valueInput: number | string;
}

declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

const DynamicViewField = (props: IDynamicViewField) => {
  const { type, label, valueInput } = props;

  return (
    <Stack direction="column" gap="2px">
      <Text type="label" weight="bold" size="small" appearance="gray">
        {label}
      </Text>
      <Text type="body" size="large" appearance="dark">
        {formatValue(valueInput, type)}
      </Text>
    </Stack>
  );
};

export { DynamicViewField };
export type { IDynamicViewField, ITextfieldInputType };
