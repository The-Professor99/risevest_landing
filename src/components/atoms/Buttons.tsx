import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "info" | "success" | "error";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  href,
  target = "_self",
  disabled = false,
}: ButtonProps) => {
  const classes = `button ${variant} ${size}`;

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
