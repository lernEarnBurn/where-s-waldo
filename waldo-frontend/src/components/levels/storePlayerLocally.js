
export async function storePlayerLocally(playerName, seconds){
  try {
    localStorage.setItem('player', JSON.stringify({name: playerName, totalSeconds: seconds}))
  } catch(err){
    console.log(err)
  }
}
