import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Input() btnText!: string;

  momentForm!: FormGroup

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get title(){
    return this.momentForm.get('title')!
  }

  get description(){
    return this.momentForm.get('title')!
  }

  submit(){
    if(this.momentForm.invalid){
      return 
    }
    console.log("Enviou o formulário")
  }
}
