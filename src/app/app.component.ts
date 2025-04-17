import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  topOptions: AnimationOptions = {
    path: 'coelho_4_3s.json' // coloque o arquivo Lottie aqui
  };

  bottomOptions: AnimationOptions = {
    path: 'coelho_4_3s.json' // ou outro caminho/arquivo se quiser variar
  };
}
