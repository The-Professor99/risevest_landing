import React from "react";
import "./Typography.scss";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "strong" | "em";
  size?: "small" | "medium" | "large";
  weight?: "light" | "regular" | "bold";
  color?: "primary" | "secondary" | "default";
  className?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = "p",
  size = "medium",
  weight = "regular",
  color = "default",
  className = "",
  children,
}: TypographyProps) => {
  const classes = `typography ${size} ${weight} ${color} ${className}`;

  const Tag = variant;

  return <Tag className={classes}>{children}</Tag>;
};

export default Typography;
