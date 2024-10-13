import React from "react";
import "./Typography.scss";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "strong" | "em";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xl2";
  weight?: "regular" | "semi-bold" | "bold";
  color?: "primary" | "secondary" | "tertiary" | "accent";
  className?: string;
  children: React.ReactNode;
  fontType?: "primaryText" | "secondaryText";
  scale?: boolean;
}

const Typography = ({
  variant = "p",
  size = "xsmall",
  weight = "regular",
  color = "primary",
  fontType = "primaryText",
  className = "",
  scale = false,
  children,
}: TypographyProps) => {
  const classes = `typography ${fontType} ${size} ${weight} ${color} ${
    scale ? "scale" : ""
  } ${className}`;

  const Tag = variant;

  return <Tag className={classes}>{children}</Tag>;
};

export default Typography;
