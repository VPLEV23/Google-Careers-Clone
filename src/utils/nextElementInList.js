const nextElementInList = (list, value) => {
  const cuurentActIndex = list.indexOf(value);
  const nextActIndex = (cuurentActIndex + 1) % list.length;
  const nextAction = list[nextActIndex];
  return nextAction;
};

export default nextElementInList;
