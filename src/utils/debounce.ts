const debounce = <T extends (...args: Parameters<T>) => void>(callback: T, ms = 20) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const callable = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), ms);
  };
  return callable;
};

export default debounce;
