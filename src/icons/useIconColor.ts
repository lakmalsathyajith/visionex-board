const useIconColor = () => {
  const defaultColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--default-icon-color")
    .trim();
  const activeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--active-icon-color")
    .trim();

  return { defaultColor, activeColor };
};

export default useIconColor;
