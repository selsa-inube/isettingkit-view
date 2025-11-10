import { Icon, Tag } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { MdOutlineLockClock } from "react-icons/md";
import { FilterModal } from "../../ModalFilter";

interface IOptionItemChecked {
  id: string;
  label: string;
  checked?: boolean;
}

interface IViewMultipleChoicesNew {
  id: string;
  label: string;
  options: IOptionItemChecked[];
  stillValid: boolean;
  showModal: boolean;
  handleOnClick: () => void;
  validDate: string;
}

const ViewMultipleChoicesNew = (props: IViewMultipleChoicesNew) => {
  const {
    id,
    label,
    options,
    stillValid,
    handleOnClick,
    showModal,
    validDate,
  } = props;

  return (
    <Stack justifyContent="space-between" alignItems="center" width="100%">
      <Text type="label" weight="bold" size="medium" appearance="gray">
        {label}
      </Text>
      <Stack wrap="wrap" gap="8px">
        {options.map((option) => (
          <Stack key={option.id} width="fit-content">
            <Tag
              id={id + option.id}
              label={option.label}
              appearance="gray"
              displayIcon={false}
            />
          </Stack>
        ))}
      </Stack>
      {stillValid && (
        <Icon
          appearance={"help"}
          icon={<MdOutlineLockClock onClick={handleOnClick} />}
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

            {options.map((option) => (
              <Tag
                id={id + option.id}
                label={option.label}
                appearance="gray"
                displayIcon={false}
              />
            ))}

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

export { ViewMultipleChoicesNew };
export type { IViewMultipleChoicesNew };
