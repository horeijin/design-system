import React from "react";
import "@frontproject/react-components-input/style.css";
import { Input, InputGroup, InputLeftAddon } from "@frontproject/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory = {
    render: () => (
      <InputGroup size="lg" color="red">
        <InputLeftAddon>$</InputLeftAddon>
        <Input placeholder="dd" />
      </InputGroup>
    ),
  };
