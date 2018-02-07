import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculette-template',
  templateUrl: './calculette-template.component.html',
  styleUrls: ['./calculette-template.component.css']
})
export class CalculetteTemplateComponent  {
  nombre1: number;
  nombre2: number;
  somme: number;

  additionner(): void {
    this.somme = this.nombre1 + this.nombre2;
  }

}
