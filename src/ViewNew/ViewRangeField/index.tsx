import { Icon, Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { formatValue } from "@isettingkit/input";
import { MdOutlineLockClock } from "react-icons/md";
import { FilterModal } from "../../ModalFilter";

interface IViewRangeFieldNew {
  labelFrom?: string;
  labelType?: string;
  typeInput: ITextfieldInputType;
  valueFrom?: string | number;
  valueTo?: string | number;
  stillValid: boolean;
  showModal: boolean;
  handleOnClick: () => void;
  validDate: string;
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
    stillValid,
    handleOnClick,
    showModal,
    validDate,
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
      {stillValid && (
        <Icon
          appearance={"help"}
          size="20px"
          icon={
            <MdOutlineLockClock
              onClick={(e) => {
                e.stopPropagation();
                handleOnClick();
              }}
            />
          }
        />
      )}
      {showModal && (
        <FilterModal
          actionButtonLabel="Aceptar"
          onClick={handleOnClick}
          onCloseModal={handleOnClick}
          portalId="portal"
          title="Vigencia cerrada"
          buttonAppearance="help"
          withIconTitle
          icon={<MdOutlineLockClock />}
        >
          <Stack direction="row" gap="4px" wrap="wrap">
            <Text type="title" size="medium" weight="normal" appearance="gray">
              {labelFrom}
            </Text>
            <Text type="title" size="medium" appearance="dark" weight="bold">
              {label}
            </Text>
            <Text type="title" size="medium" weight="normal" appearance="gray">
              {"estará vigente hasta"}
            </Text>
            <Text type="title" size="medium" appearance="dark" weight="bold">
              {validDate}
            </Text>
          </Stack>
        </FilterModal>
      )}
    </Stack>
  );
};

export { ViewRangeFieldNew };
export type { IViewRangeFieldNew };
