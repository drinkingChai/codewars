function guessGifts(wishlist, presents) {
  var allItems = []
  var whatIgot = []
  for (index in presents) {
  	curPresent = presents[index]
  	allItems.push([curPresent.size, curPresent.clatters, curPresent.weight].join())
  }

  for (index in wishlist) {
  	curWish = wishlist[index]
  	if (allItems.indexOf([curWish.size, curWish.clatters, curWish.weight].join()) != -1 && whatIgot.indexOf(curWish.name) == -1) {
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