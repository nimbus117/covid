export default (
  array: Record<string, any>[],
  property: string,
): Record<string, any>[] => {
  return array.concat().sort((a, b) => b[property] - a[property]);
};
