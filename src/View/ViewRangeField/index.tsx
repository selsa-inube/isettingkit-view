import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { formatValue } from "@isettingkit/input";

interface IViewRangeField {
  labelFrom?: string;
  labelType?: string;
  typeInput: ITextfieldInputType;
  valueFrom?: string | number;
  valueTo?: string | number;
}

declare const inputTypes: readonly [
  "alphabetical",
  "currency",
  "date",
  "number",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

const ViewRangeField = (props: IViewRangeField) => {
  const {
    labelFrom = "",
    labelType = "condition",
    typeInput,
    valueFrom = 0,
    valueTo = 0,
  } = props;

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
        {labelFrom}
      </Text>
      <Text
        as="span"
        type="label"
        weight={labelType === "condition" ? "normal" : "bold"}
        size={labelType === "condition" ? "medium" : "large"}
        appearance="gray"
      >
        <Stack gap="4px">
          De
          <Text
            as="span"
            type="label"
            weight="bold"
            size={labelType === "condition" ? "medium" : "large"}
            appearance="gray"
          >
            {formatValue(valueFrom, typeInput)}
          </Text>
          a
          <Text
            as="span"
            type="label"
            weight="bold"
            size={labelType === "condition" ? "medium" : "large"}
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
