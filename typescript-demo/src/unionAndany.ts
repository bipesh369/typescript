// union
let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = 'success'


let airline: 'aisle' | 'window' | 'middle' = 'middle'

airline = 'window'


const orders = ['12', '20', '28', '42']

let currentorder: string | undefined;

for(let order of orders){
  if(order === '28'){
    currentorder = order
    break
  }
  currentorder = '10'
}

console.log(currentorder)