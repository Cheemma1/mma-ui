import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {
    children,
    backgroundColor = "purple",
    color = "white", // Default color is white
    style,
    width = 100,
    height = 40,
    ...restProps
  } = props;

  let _style: React.CSSProperties = style || {};

  /** Override Defaults */
  if (_style) _style.backgroundColor = backgroundColor;
  if (_style) _style.color = color;
  if (width) _style.width = width;
  if (height) _style.height = height;
  _style.cursor = "pointer"; // Add pointer cursor

  return (
    <ChakraButton
      style={_style}
      {...restProps}
      onMouseOver={() => {
        // Add hover styles
        if (_style) _style.backgroundColor = "transparent";
        if (_style) _style.border = "1px solid purple";
      }}
      onMouseOut={() => {
        // Remove hover styles
        if (_style) _style.backgroundColor = backgroundColor;
        if (_style) _style.border = "none";
      }}
    >
      {children}
    </ChakraButton>
  );
};
