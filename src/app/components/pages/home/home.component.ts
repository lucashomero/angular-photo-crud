import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { NewMomentComponent } from '../new-moment/new-moment.component';
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment';
import { MomentService } from '../../../services/moment.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MomentFormComponent, NewMomentComponent, CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = '';
  // to do search

  constructor(private momentService: MomentService){}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data
      this.moments = data
    });
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.moments = this.allMoments.filter((moment)=>{
      return moment.title.toLowerCase().includes(value);
    });
  }
}
