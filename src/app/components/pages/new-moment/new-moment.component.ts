import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent, CommonModule],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = "Compartilhar!"

  constructor(private momentService: MomentService, private messagesService: MessagesService, private router: Router){}
  
  async createHandler(moment: Moment) {
    const formData = new  FormData()
    formData.append("title", moment.title)
    formData.append("description", moment.description)
    if(moment.image) {
      formData.append("image", moment.image)
    }

    await this.momentService.createMoment(formData).subscribe();
    
    this.messagesService.add('Momento adicionado com sucesso!');
    
    this.router.navigate(['/']);
  }
  // to do - list
  // enviar para o service - check
  // exibir msg
  // redirect
}
