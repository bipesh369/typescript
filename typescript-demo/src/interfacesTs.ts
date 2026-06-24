type ChaiOrder = {
  type: string; 
  sugar: number; 
  strong: boolean
}


function makeChai(order:{type: ChaiOrder}) {
  console.log(order)
}


function serveChai(order:{type: ChaiOrder}) {
  console.log(order)
}


// Interfaces
type TeaRecipe = {
  water : number
  milk : number
}

class MasalaChai implements TeaRecipe {
  water = 100
  milk  = 50
}

interface CupSize {
  size: "small" | "large"
}

class Chai implements CupSize {
  size: "small" | "large" = "large"
}