import { IButtonAppearance } from "@inubekit/inubekit";

interface IFilterModal {
  actionButtonLabel: string;
  cancelButtonLabel: string;
  children: React.ReactNode;
  loading?: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  portalId: string;
  title: string;
  withText?: boolean;
  withDivider?: boolean;
  withCancelButton?: boolean;
  buttonAppearance?: IButtonAppearance;
  withIconTitle?: boolean;
  icon?: React.ReactNode;
}

export type { IFilterModal };
