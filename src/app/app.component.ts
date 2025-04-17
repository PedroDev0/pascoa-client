import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LottieComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string = "";

  constructor(private http: HttpClient) { }

  numeroSorteado: number = 0;

  topOptions: AnimationOptions = {
    path: 'coelho_4_3s.json' // coloque o arquivo Lottie aqui
  };

  bottomOptions: AnimationOptions = {
    path: 'coelho_4_3s.json' // ou outro caminho/arquivo se quiser variar
  };
  sortearNumero() {
    // Codificando o nome de usuário e senha em Base64
    const username = 'pedro';
    const password = '1234';
    const auth = 'Basic ' + btoa(username + ':' + password);

    // Criando o header com a autorização
    const headers = new HttpHeaders({
      'Authorization': auth
    });

    // Fazendo a requisição com os headers de autenticação
    this.http.get<{ numeroSorte: number, usuario: string }>('http://localhost:8080/pascoa-sorte', { headers })
      .subscribe({
        next: response => {
          // Aqui estamos pegando apenas o valor de numeroSorte
          this.numeroSorteado = response.numeroSorte;
          this.title = response.usuario;
        },
        error: err => console.error('Erro ao buscar número:', err)
      });
  }
}
