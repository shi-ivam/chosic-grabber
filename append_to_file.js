// Input text from cli
// Output text to file

const fs = require('fs');

// get the added songs stored in "songs" file
const songs = fs.readFileSync('songs', 'utf8').split("\n");

// get the songs raw_songs file
const raw_songs = JSON.parse(fs.readFileSync('raw_text', 'utf8'));

for (let i = 0; i < raw_songs.length; i++) {
  const song = raw_songs[i];
  if (!songs.includes(song)) {
    fs.appendFileSync('songs', song + "\n");
    }
    // remove previous line 
    console.clear()

    max_length = 30
    percentage = ((i+1)/raw_songs.length)*100


    filled_bars = Math.ceil(percentage*max_length/100)
    empty_bars = max_length-filled_bars

    console.log('[' , '='.repeat(filled_bars) , ' '.repeat(empty_bars) ,']')
    console.log(i+1, ' / ', raw_songs.length )
}