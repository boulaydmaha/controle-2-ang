import { Component, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private router: Router) {}
 

  liste_voiture = [ 
    {
      id: "1",
      immatriculation: "123456 A 1",
      marque: "Ferrari",
      couleur: "red",
      nbr_sieges: 4,
      image: "https://icons.iconarchive.com/icons/iconshow/transport/256/Sportscar-car-2-icon.png",
    },
    {
      id: "2",
      immatriculation: "123456 B 2",
      marque: "Lamborghini",
      couleur: "black",
      nbr_sieges: 5,
      image: "https://icons.iconarchive.com/icons/iconshow/transport/256/Sportscar-car-2-icon.png",
    },
    {
      id: "3",
      immatriculation: "123456 C 3",
      marque: "Mercedes",
      couleur: "Pink",
      nbr_sieges: 4,
      image: "https://icons.iconarchive.com/icons/iconshow/transport/256/Sportscar-car-2-icon.png",
    },
    
  


  ];

  ngOnInit(): void { 

    console.log('Liste voitures ', this.liste_voiture);
 
  }



  goToDetailCar(voiture) { 
    this.router.navigate(["car-details", JSON.stringify(voiture)]);
  }
   

}