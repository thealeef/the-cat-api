import { Component } from '@angular/core';
import { InicioComponent } from "./page/inicio/inicio/inicio.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InicioComponent,
    HttpClientModule // Adicione o HttpClientModule aqui
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-cat-api';
}
