const useIconColor = (variant: string) => {
  const defaultColor = "currentColor";

  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-icon-color")
    .trim();

  const activeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--active-icon-color")
    .trim();

  const fadedColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--faded-icon-color")
    .trim();

  let fillColor = defaultColor;
  switch (variant) {
    case "primary":
      fillColor = primaryColor;
      break;
    case "active":
      fillColor = activeColor;
      break;
    case "faded":
      fillColor = fadedColor;
      break;
    default:
      fillColor = defaultColor;
      break;
  }

  return { fillColor };
};

export default useIconColor;
