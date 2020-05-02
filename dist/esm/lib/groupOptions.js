export default function groupOptions(options) {
  const nextOptions = [];
  options.forEach((option, i) => {
    if ('groupId' in option) {
      const nextOption = Object.assign({}, option);
      const groupIndex = nextOptions.findIndex(el => 'groupId' in el && el.groupId === nextOption.groupId);
      nextOption.index = i;

      if (groupIndex !== null && groupIndex > -1) {
        nextOptions[groupIndex].items.push(nextOption);
      } else {
        nextOptions.push({
          items: [nextOption],
          groupId: option.groupId,
          type: 'group',
          name: option.groupName
        });
      }
    } else {
      nextOptions.push(option);
    }
  });
  return nextOptions;
}