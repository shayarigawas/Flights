import { AfterViewInit, Component, OnInit } from '@angular/core';
import flightsData from 'src/app/flight-list/flights.json';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  orgFlightsArr:Flight[] = flightsData;
  flights: Flight[] = flightsData;
  originCity: string;
  destCity: string;
  departureDate: any;
  returnDate: any;
  passengers: number;
  oneWay: boolean = false;
  minPrice: any;
  maxPrice: any;
  constructor() { }

  ngOnInit() {
  }

  searchFlights() {
    this.flights = this.orgFlightsArr;
    if(this.originCity !== undefined) {
       this.flights = this.flights.filter(flight => flight.originCity.toLocaleLowerCase() === this.originCity.toLocaleLowerCase())
       }
       if(this.destCity !== undefined) {
        this.flights = this.flights.filter(flight => flight.destCity.toLocaleLowerCase() === this.destCity.toLocaleLowerCase())
       }

       if(this.departureDate !== undefined) {
         this.flights = this.flights.filter(flight => flight.departDate === this.departureDate)
       }

       if(this.returnDate !== undefined) {
         this.flights = this.flights.filter(flight => flight.returnDepartDate === this.returnDate)
       }

       if(this.passengers) {
         this.flights = this.flights.filter(flight => flight.availableSeats >= this.passengers)
       }
       this.flights = this.flights.filter(flight => flight.oneway === this.oneWay)

  }


}
