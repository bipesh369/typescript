// class Chai {
//   flavour: string
//   price: number

// //   constructor(flavour: string, price: number){
// //   this.flavour = flavour
// //   this.price = price
// // }

//  constructor(flavour: string){
//   this.flavour = flavour
//   }

// }


// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"



// Access Modifier
class Chai {
  public flavour: string = "Masala"
  private secretIngredients = "Cardamom"

  reveal(){
     return this.secretIngredients   //ok
  }

}

class Shop {
  protected shopName = "Chai Flavour"
}
class Branch extends Shop {
  getName(){
    return this.shopName  //ok
  }
}

new Branch().getName

//const c = new Chai()




class ModernChai {
  private _sugar = 2

  get sugar(){
    return this._sugar
  }

  set sugar(value: number){
    this._sugar = value
  }
}

const c = new ModernChai()
c.sugar = 5