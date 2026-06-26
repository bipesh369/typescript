enum CupSize {
  small,
  medium,
  large
}
const size = CupSize.large


enum Status {
  pending = 100,
  served, // auto 101
  canceled // auto 102
}


enum ChaiType {
  masala = "masala",
  ginger = "ginger"
}
function makeChai(type: ChaiType){
  console.log(`Making: ${type}`)
}
makeChai(ChaiType.ginger)