import { createPortal } from "react-dom";
import { MdClear, MdOutlineFilterAltOff } from "react-icons/md";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";

import { StyledModal, StyledModalWrapper } from "./styles";
import { IFilterModal } from "./IFilterModal";

const FilterModal = (props: IFilterModal) => {
  const {
    actionButtonLabel,
    cancelButtonLabel = "",
    children,
    loading,
    onClick,
    onCloseModal,
    portalId,
    title,
    withText = false,
    withDivider = false,
    withCancelButton = false,
    buttonAppearance = "primary",
    withIconTitle = false,
    icon,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <StyledModalWrapper
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      <Blanket>
        <StyledModal $smallScreen={isMobile}>
          <Stack direction="column" gap="16px">
            <Stack alignContent="center" justifyContent="space-between">
              <Stack gap="8px">
                {withIconTitle && (
                  <Icon appearance={buttonAppearance} icon={icon} />
                )}
                <Text appearance="dark" size="small" type="headline">
                  {title}
                </Text>
              </Stack>
              <Stack alignItems="center">
                {withText && <Text>Cerrar</Text>}
                <Icon
                  appearance="dark"
                  icon={<MdClear />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseModal();
                  }}
                  cursorHover
                />
              </Stack>
            </Stack>
            {withDivider && <Divider />}
          </Stack>
          {children}
          <Stack gap="20px" justifyContent="flex-end">
            {withCancelButton && (
              <Button
                appearance="gray"
                onClick={onCloseModal}
                iconBefore={<MdOutlineFilterAltOff />}
                spacing="wide"
                variant="outlined"
              >
                {cancelButtonLabel}
              </Button>
            )}

            <Button
              appearance={buttonAppearance}
              loading={loading}
              onClick={(e) => {
                e?.stopPropagation();
                onClick();
              }}
              spacing="wide"
              variant="filled"
            >
              {actionButtonLabel}
            </Button>
          </Stack>
        </StyledModal>
      </Blanket>
    </StyledModalWrapper>,
    node,
  );
};

export { FilterModal };
