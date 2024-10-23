import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { formatValue } from "@isettingkit/input";

interface IViewRangeField {
  label: string;
  labelFrom?: string;
  labelTo?: string;
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
  const {
    label,
    labelFrom = "",
    labelTo = "",
    typeInput,
    valueFrom = 0,
    valueTo = 0,
  } = props;

  return (
    <Stack direction="column" gap="2px">
      <Text type="label" weight="bold" size="small" appearance="gray">
        {label}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" margin="10px 0" gap="12px">
        <Stack direction="column" gap="2px">
          <Text type="label" weight="bold" size="small" appearance="gray">
            {labelFrom}
          </Text>
          <Text type="body" size="large" appearance="dark">
            {formatValue(valueFrom, typeInput)}
          </Text>
        </Stack>
        <Stack direction="column" gap="2px">
          <Text type="label" weight="bold" size="small" appearance="gray">
            {labelTo}
          </Text>
          <Text type="body" size="large" appearance="dark">
            {formatValue(valueTo, typeInput)}
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
};

export { ViewRangeField };
export type { IViewRangeField };
