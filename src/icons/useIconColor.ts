const useIconColor = () => {
  const defaultColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--default-icon-color")
    .trim();
  const activeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--active-icon-color")
    .trim();

  const fadedColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--faded-icon-color")
    .trim();

  return { defaultColor, activeColor, fadedColor };
};

export default useIconColor;
