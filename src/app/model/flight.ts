export interface Flight {
  "id": number,
  "name": string,
  "originCity": string,
  "destCity": string,
  "departDate": string,
  "departTime": string,
  "arriveDate": string,
  "arriveTime": string,
  "returnDepartDate": string,
  "returnDepartTime": string,
  "returnArriveDate": string,
  "returnArriveTime": string,
  "price": string,
  "img": string,
  "oneway": boolean,
  "code": string,
  "totalPassengers": number,
  "availableSeats": number
}
