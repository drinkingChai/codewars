function guessGifts(wishlist, presents) {
  // TODO
  var whatIgot = []
  var wishHash = {}
  for (index in wishlist) {
  	curWish = wishlist[index]
  	var key = [curWish.size, curWish.clatters, curWish.weight]
  	key.sort()
  	wishHash[key] = curWish.name
  }

  for (index in presents) {
  	curPresent = presents[index]
  	curPresentAry = [curPresent.size, curPresent.clatters, curPresent.weight]
  	curPresentAry.sort()

  	if (curPresentAry in wishHash) {
  		whatIgot.push(wishHash[curPresentAry])
  	}
  }

  return whatIgot;
}

function guessGifts2(wishlist, presents) {
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

console.log(guessGifts2([
        {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
        {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
        {name: "card game", size: "small", clatters: "no", weight: "light"}
      ],
      [
        {size: "medium", clatters: "a bit", weight: "medium"},
        {size: "small", clatters: "yes", weight: "light"}
      ]))