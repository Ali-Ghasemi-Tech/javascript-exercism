// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  for(let key in playlist){
    let track = playlist[key];
    for(let duplicate in playlist){
      if(playlist[duplicate] === playlist[key] && duplicate !== key){
        delete playlist[duplicate]
      }
    }
  }
  return playlist
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track);

}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  if(!playlist.includes(track)){
    playlist.push(track);
  }
  return playlist
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {

  if(playlist.includes(track)){playlist.splice(playlist.indexOf(track) , 1)
  return playlist
  };
  return playlist;
  
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let set = new Set();
  for (let key in playlist){
    let artist = playlist[key].substring(playlist[key].indexOf('-') +2)
    set.add(artist)
  }
  return Array.from(set);
}
