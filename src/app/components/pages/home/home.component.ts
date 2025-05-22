import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { NewMomentComponent } from '../new-moment/new-moment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MomentFormComponent, NewMomentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
