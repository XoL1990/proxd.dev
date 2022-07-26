type Options = { [index: string]: boolean | string | undefined };

const getClassNames = (componentName: string, modifiers: Options, customClass = "") => {
  const classes = [componentName];
  /* eslint-disable-next-line no-restricted-syntax */
  for (const modifier of Object.keys(modifiers)) {
    const value = modifiers[modifier];
    if (typeof value === "string") {
      classes.push(`${componentName}--${value}`);
    } else if (value) {
      classes.push(`${componentName}--${modifier}`);
    }
  }
  if (customClass) classes.push(customClass);
  return classes.join(" ");
};

export default getClassNames;
