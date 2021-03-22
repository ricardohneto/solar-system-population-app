import { Component } from '@angular/core';
import { Planeta } from 'src/model/planeta';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solar System Population App';

  populacao: Planeta[] = [
    {
      'nome_planeta': 'Terra',
      'populacao_humanos': 200000000,
      'populacao_alienigenas': 153000,
      'populacao_asgardianos': 500,
      'populacao_ancioes': 32111,
      'populacao_celestiais': 12,
    },
    {
      'nome_planeta': 'Marte',
      'populacao_humanos': 100,
      'populacao_alienigenas': 500000000,
      'populacao_asgardianos': 333,
      'populacao_ancioes': 123,
      'populacao_celestiais': 7654,
    },
    {
      'nome_planeta': 'Asgard',
      'populacao_humanos': 300,
      'populacao_alienigenas': 10000,
      'populacao_asgardianos': 5000,
      'populacao_ancioes': 43534,
      'populacao_celestiais': 34534,
    },
    {
      'nome_planeta': 'Saturno',
      'populacao_humanos': 0,
      'populacao_alienigenas': 3214,
      'populacao_asgardianos': 5444,
      'populacao_ancioes': 5555,
      'populacao_celestiais': 6666,
    },
    {
      'nome_planeta': 'Jupiter',
      'populacao_humanos': 432432,
      'populacao_alienigenas': 43455,
      'populacao_asgardianos': 6666,
      'populacao_ancioes': 12,
      'populacao_celestiais': 123,
    }
  ];

  onDelete(row: Planeta) {
    this.populacao.splice(this.populacao.indexOf(row), 1);
  }

}
