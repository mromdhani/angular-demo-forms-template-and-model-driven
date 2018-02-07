import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculette-model',
  templateUrl: './calculette-model.component.html',
  styleUrls: ['./calculette-model.component.css']
})
export class CalculetteModelComponent implements OnInit {

  myForm: FormGroup;
  post: any;
  name: string = '';
  description: string = '';

  constructor(private fb: FormBuilder) {
      this.myForm = fb.group ({
        'name' : [null, Validators.required],
        'description' : [null, Validators.minLength(10)]
   });
 }
 ngOnInit() {

}
 addPost(post) {
    this.name = post.name;
    this.description = post.description;
  }

}
