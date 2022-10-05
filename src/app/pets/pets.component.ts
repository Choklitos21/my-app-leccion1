import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img: string = 'https://thecatapi.com/api/images/get?format=src&type=gif';

}
