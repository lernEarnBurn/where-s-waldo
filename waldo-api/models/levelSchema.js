export const isLevel = (level) => {

  return (
    level &&
    typeof level.name === 'string' &&
    typeof level.x_start === 'number' &&
    typeof level.x_end === 'number' &&
    typeof level.y_start === 'number' &&
    typeof level.y_end === 'number'
  );
};