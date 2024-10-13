import "./Buttons.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "inverted-primary"
    | "inverted-secondary"
    | "tertiary";
  size?: "xsmall" | "small" | "medium" | "large";
  weight?: "regular" | "semi-bold" | "bold" | "bolder";
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  className?: string;
  fontType?: "primaryText" | "secondaryText";
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  weight = "regular",
  fontType = "primaryText",
  onClick,
  href,
  target = "_self",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const classes = `button ${fontType} ${variant} ${weight} ${size}  ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classes}
        role="button"
        aria-disabled={disabled ? "true" : "false"}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
