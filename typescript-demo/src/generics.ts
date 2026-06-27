// generic makes code reuseable
function wrapInArray<T>(item: T): T[] {
  return [item]
}

wrapInArray("masala")
wrapInArray(56)
wrapInArray({flavour: "Ginger"})



function pair<A, B>(a: A, b: B): [A, B]{
  return [a, b]
}

pair("masala", 50)


interface Box<T> {
  content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCuo: Box<string> = {content: "10"}