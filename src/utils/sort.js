export default (array, property) => {
  return array.concat().sort((a, b) => b[property] - a[property]);
};
