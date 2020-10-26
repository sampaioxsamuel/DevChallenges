import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ text, variant, disableShadow, disable, size, color }) => {
  const isOutline = variant === "outline" ? styles.outline : "";
  const isText = variant === "text" ? styles.text : "";
  const isDisabledShadow = disableShadow ? styles.disableShadow : styles.shadow;
  const isDisabled = disable ? styles.disabled : "";

  const btnSize = (size) => {
    if (size === "sm") return styles.sm;
    else if (size === "md") return styles.md;
    else if (size === "lg") return styles.lg;
    else if (size === "xl") return styles.xl;
  };

  const btnColor = (color) => {
    if (color === "primary") return styles.primary;
    else if (color === "secondary") return styles.secondary;
    else if (color === "danger") return styles.danger;
    else if (color === "default") return styles.defaultColor;
  };

  return (
    <>
      <button
        className={`${isText} ${isOutline} ${isDisabledShadow} ${isDisabled} 
          ${btnSize(size)} ${btnColor(color)}
        `}
      >
        {text}
      </button>
    </>
  );
};

Button.prototype = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
