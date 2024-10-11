import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  centerContent?: boolean;
}

const Container = ({
  children,
  className = "",
  maxWidth = "lg",
  padding = "md",
  centerContent = false,
}: ContainerProps) => {
  return (
    <div
      className={`container ${maxWidth} ${padding} ${
        centerContent ? "center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
