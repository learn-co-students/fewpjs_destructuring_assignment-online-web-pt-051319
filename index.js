const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
let [Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ')
let [black_and_white,, black, pink,] = farmAnimals.split(' ')
let [red, orange, yellow, green, blue, indigo, violet] = colors
let [r, o, y, g, b, i, v] = colors
let [,,,,,indg,] = colors
let {name, color, song, job, partner} = muppet
let {k_color, k_partner, k_job} = k_muppet
let {song_2, song_4} = k_muppet.k_album.the_muppet_movie