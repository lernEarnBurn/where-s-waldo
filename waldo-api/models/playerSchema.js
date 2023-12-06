export const isPlayer = (player) => {
  
  return (
    player &&
    typeof player.name === 'string' &&
    Array.isArray(player.runs) &&
    player.runs.every(run => (
      typeof run === 'object' &&
      run.hasOwnProperty('level') && typeof run.level === 'string' &&
      run.hasOwnProperty('totalSeconds') && typeof run.totalSeconds === 'number'
    ))
  );
};