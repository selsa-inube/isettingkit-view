import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { formatValue } from "@isettingkit/input";

interface IViewRangeField {
  labelFrom?: string;
  typeInput: ITextfieldInputType;
  valueFrom?: string | number;
  valueTo?: string | number;
}

declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

const ViewRangeField = (props: IViewRangeField) => {
  const { labelFrom = "", typeInput, valueFrom = 0, valueTo = 0 } = props;

  return (
    <Stack direction="column" gap="4px" alignItems="center">
      <Text type="label" weight="bold" size="large" appearance="dark">
        {labelFrom}
      </Text>
      <Text as="span" type="label" size="large" appearance="gray">
        <Stack gap="4px">
          De
          <Text
            as="span"
            type="label"
            weight="bold"
            size="large"
            appearance="gray"
          >
            {formatValue(valueFrom, typeInput)}
          </Text>
          a
          <Text
            as="span"
            type="label"
            weight="bold"
            size="large"
            appearance="gray"
          >
            {formatValue(valueTo, typeInput)}
          </Text>
        </Stack>
      </Text>
    </Stack>
  );
};

export { ViewRangeField };
export type { IViewRangeField };
