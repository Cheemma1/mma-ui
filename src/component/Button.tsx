import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export interface IButtonProps extends ButtonProps {
  backgroundColor?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

// export interface IButtonProps
//   extends React.ComponentProps<typeof ChakraButton> ButtonProps {
//   backgroundColor?: string;
//   color?: string;
//   width?: string | number;
//   height?: string | number;
// }

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor = "purple",
  color = "white",
  width = 100,
  height = 40,
  ...restProps
}) => {
  const buttonStyles = {
    backgroundColor,
    color,
    width,
    height,
    cursor: "pointer",
    transition: "background-color 0.3s, border 0.3s",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid purple",
      color: "purple",
    },
  };

  return (
    <ChakraButton
      {...restProps}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      _hover={{
        backgroundColor: "transparent",
        border: "1px solid purple",
      }}
      sx={buttonStyles}
      // Pass any other Chakra UI props here
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
