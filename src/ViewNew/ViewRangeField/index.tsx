import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { formatValue } from "@isettingkit/input";

interface IViewRangeFieldNew {
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
  "monetary",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

const ViewRangeFieldNew = (props: IViewRangeFieldNew) => {
  const {
    labelFrom = "",
    labelType = "condition",
    typeInput,
    valueFrom = 0,
    valueTo = 0,
  } = props;

  const label = `De ${formatValue(valueFrom, typeInput)} a ${formatValue(valueTo, typeInput)}`;
  return (
    <Stack
      gap="8px"
      alignItems="center"
      justifyContent={
        labelType === "condition" ? "space-between" : "flex-start"
      }
    >
      <Text
        type="label"
        weight="bold"
        size="medium"
        appearance={labelType === "condition" ? "gray" : "dark"}
      >
        {labelFrom}
      </Text>
      <Text
        as="span"
        type={labelType === "condition" ? "body" : "title"}
        weight="normal"
        size={labelType === "condition" ? "small" : "medium"}
        appearance={labelType === "condition" ? "dark" : "gray"}
      >
        {label}
      </Text>
    </Stack>
  );
};

export { ViewRangeFieldNew };
export type { IViewRangeFieldNew };
