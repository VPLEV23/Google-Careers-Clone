const nextElementInList = <T>(list: T[], value: T) => {
  const cuurentActIndex = list.indexOf(value);
  const nextActIndex = (cuurentActIndex + 1) % list.length;
  const nextAction = list[nextActIndex];
  return nextAction;
};

export default nextElementInList;
