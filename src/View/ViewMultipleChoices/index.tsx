import { Tag } from "@inubekit/tag";
import { Grid } from "@inubekit/grid";
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
      <Text type="label" weight="bold" size="small" appearance="gray">
        {label}
      </Text>
      <Grid
        templateColumns="repeat(auto-fit, minmax(78px, 1fr))"
        autoRows="minmax(16px, auto)"
        gap="10px"
      >
        {options.map((option) => (
          <Tag
            id={id + option.id}
            key={option.id}
            label={option.label}
            weight="strong"
            appearance="primary"
          />
        ))}
      </Grid>
    </Stack>
  );
};

export { ViewMultipleChoices };
export type { ViewMultipleChoicesProps };
