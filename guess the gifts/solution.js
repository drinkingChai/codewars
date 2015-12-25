function guessGifts(wishlist, presents) {
  //TODO
  var allItems = []	//capture string of all items in presents array
  var whatIgot = []	//store what presents are found
  for (index in presents) {
  	//for each present, create an array and convert it into a string
  	curPresent = presents[index]
  	allItems.push([curPresent.size, curPresent.clatters, curPresent.weight].join())
  }

  for (index in wishlist) {
  	curWish = wishlist[index]
  	if (allItems.indexOf([curWish.size, curWish.clatters, curWish.weight].join()) != -1 && whatIgot.indexOf(curWish.name) == -1) {
  		//for each item in wishlist, check to see if it's in allItems and if so, is it already in whatIgot
  		//if not, push it's name into whatIgot
  		whatIgot.push(curWish.name)
  	}
  }

  return whatIgot;
}

console.log(guessGifts([
        {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
        {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
        {name: "card game", size: "small", clatters: "no", weight: "light"}
      ],
      [
        {size: "medium", clatters: "a bit", weight: "medium"},
        {size: "small", clatters: "yes", weight: "light"}
      ]))