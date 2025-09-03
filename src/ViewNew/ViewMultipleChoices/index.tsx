import { Tag } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";

interface IOptionItemChecked {
  id: string;
  label: string;
  checked?: boolean;
}

interface IViewMultipleChoicesNew {
  id: string;
  label: string;
  options: IOptionItemChecked[];
}

const ViewMultipleChoicesNew = (props: IViewMultipleChoicesNew) => {
  const { id, label, options } = props;

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
    </Stack>
  );
};

export { ViewMultipleChoicesNew };
export type { IViewMultipleChoicesNew };
