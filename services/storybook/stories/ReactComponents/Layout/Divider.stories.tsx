import "@frontproject/react-components-layout/style.css";
import { Box, Divider as _Divider } from "@frontproject/react-components-layout";
import { vars } from '@frontproject/themes';

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => <Box padding={3} style={{ width: '300px', height: '300px' }}><Story /></Box>
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};


export const Divider = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};