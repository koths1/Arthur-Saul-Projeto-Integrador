import { Injectable } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedback: Feedback;   //Feedback armazenado no service, acessivel a qualquer componente que declare feedbackService.
  private apiurl = 'https://lapicsweb-api.herokuapp.com';   //Url da api qual fazemos as chamadas Http.

  constructor(private http: HttpClient) { }

  getFeedback(): Observable<Feedback[]> {    //Puxa todos os feedbacks.
    return this.http.get<Feedback[]>(this.apiurl + '/feedback')
  }

  getFeedbackById(idFeedback: number): Observable<Feedback[]> {    //Puxa um feedback por id.
    return this.http.get<Feedback[]>(this.apiurl + '/feedback/' + idFeedback)
  }

  getFeedbackByAgendamento(idAgendamento: number): Observable<Feedback[]> {    //Puxa um feedback por id de agendamento.
    return this.http.get<Feedback[]>(this.apiurl + '/feedbackAgendamento/' + idAgendamento)
  }

  createFeedback(feedback: Feedback) {   //Cria um feedback  (Participante).
    this.http.post(this.apiurl + 'addFeedback/' + feedback.idagendamento, { "pic": feedback.pic, "comofoi": feedback.comofoi, "relate": feedback.relate, "impressao": feedback.impressao }).subscribe(res => { console.log(res) })
  }

  editFeedback(feedback: Feedback) {   //Editar um feedback (Participante).
    this.http.post(this.apiurl + 'editFeedback/' + feedback.idfeedback, { "pic": feedback.pic, "comofoi": feedback.comofoi, "relate": feedback.relate, "impressao": feedback.impressao }).subscribe(res => { console.log(res) })
  }

  setFeedbackSelecionado(feedback: Feedback) {   //Define um feedback armazenado no service.
    this.feedback = feedback
  }

  getFeedbackSelecionado(): Feedback {   //Retorna o feedback armazenado no service.
    return this.feedback
  }

  removeFeedbackSelecionado() {    //Remove o feedback armazenado no service.
    this.feedback = null
  }

}
