import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}
  

  voiture = {
    id: "",
    immatriculation: "",
    marque: "",
    couleur: "",
    nbr_sieges: 0,
    image: "",
  };

  ngOnInit(): void { 
    this.voiture = JSON.parse(this.activatedRoute.snapshot.params.car);
  }

}