import { MdOutlineLockClock } from "react-icons/md";

import { Icon, Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { formatValue } from "@isettingkit/input";
import { FilterModal } from "../../ModalFilter";

interface IDynamicViewFieldNew {
  label: string;
  labelType?: string;
  type: ITextfieldInputType;
  valueInput: number | string;
  stillValid: boolean;
  showModal: boolean;
  handleOnClick: () => void;
  validDate: string;
}

declare const inputTypes: readonly [
  "alphabetical",
  "currency",
  "monetary",
  "date",
  "number",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

const DynamicViewFieldNew = (props: IDynamicViewFieldNew) => {
  const {
    label,
    labelType = "condition",
    type,
    valueInput,
    stillValid,
    handleOnClick,
    showModal,
    validDate,
  } = props;
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
      {stillValid && (
        <Icon
          appearance={"help"}
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
              {label}
            </Text>
            <Text type="title" size="medium" appearance="dark" weight="bold">
              {formatValue(valueInput, type)}
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

export { DynamicViewFieldNew };
export type { IDynamicViewFieldNew, ITextfieldInputType };
