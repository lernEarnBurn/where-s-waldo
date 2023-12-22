import axios from 'axios'

export async function createPlayerInstance(playerName, level, seconds){
  try {
    const playerInstance = await axios.post('http://localhost:3000/player', {name: playerName})
    const jsonData = playerInstance.data.replace('created player: ', '');
    const playerData = JSON.parse(jsonData);
    const id = playerData.id;
    const addRunToPlayer  = await axios.put(`http://localhost:3000/player/${id}`, {level: level, totalSeconds: seconds})
  } catch(err){
    console.log(err)
  }
}
