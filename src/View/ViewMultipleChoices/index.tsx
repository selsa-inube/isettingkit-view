import { Tag } from "@inubekit/tag";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

interface IOptionItemChecked {
  id: string;
  label: string;
  checked?: boolean;
}

interface ViewMultipleChoicesProps {
  id: string;
  label: string;
  options: IOptionItemChecked[];
}

const ViewMultipleChoices = (props: ViewMultipleChoicesProps) => {
  const { id, label, options } = props;

  return (
    <Stack direction="column" gap="2px">
      <Text type="label" weight="bold" size="medium" appearance="dark">
        {label}
      </Text>
      <Stack wrap="wrap" gap="8px">
        {options.map((option) => (
          <Stack key={option.id} width="fit-content">
            <Tag
              id={id + option.id}
              label={option.label}
              appearance="gray"
              weight="strong"
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export { ViewMultipleChoices };
export type { ViewMultipleChoicesProps };
