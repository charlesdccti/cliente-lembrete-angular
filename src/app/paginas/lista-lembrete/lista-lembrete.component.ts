import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interface/lembrete';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/service/lembrete.service';


@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  @ViewChild('errorMsgComponent', { static: true }) errorMsgComponent: ErrorMsgComponent;


  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    //console.log("ENTROU !!!! ngOnInit()");
    this.getListaLembretes();
    // console.log("=========>>>>>>");
    // console.log(this.lembretes);
    // console.log("=========>>>>>>");
    // console.log(this.getListaLembretes());
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembretes.'); });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponent.setError('Falha ao deletar lembrete.'); });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
