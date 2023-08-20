  //Lyrics of the song 99 Bottles of Beer
  function beer() {
      let bottles = 99;
      let bottle_word = "bottles"
      while (bottles > 0) {
          if (bottles < 2) {
              bottle_word = "bottle";
          } else {
              bottle_word = "bottles"
          }
          console.log(bottles + " " + bottle_word + " of beer on the wall, " + bottles + " " + bottle_word + " of beer.Take one down and pass it around, " + bottles + " " + bottle_word + " of beer on the wall.")

          bottles = bottles - 1
      }
  }

  beer()