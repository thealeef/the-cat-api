import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs'; // Importe 'map'
import { Cat, CatImage } from '../model/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private apiKey = 'live_ybX2dX8dzFake4EizOChBjmBvudTGJwVNFI9SjEOLEsiUTExNpzLnX6qfr1eay0B'; // Substitua pela sua chave de API
  //private apiUrl = 'https://api.thecatapi.com/v1'; // URL do backend
  //private apiUrl = "https://api.thecatapi.com/v1/images/search";
  private apiUrl = "https://api.thecatapi.com/v1/breeds";
  private apiUrlImagem = "https://api.thecatapi.com/v1/images/search?breed_ids=beng";
  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey, // Adicione a apiKey nos headers
    });

    console.log("Fazendo requisição para:", this.apiUrl);

    return this.http.get<Cat[]>(this.apiUrl, { headers }).pipe(
      tap(response => {
        console.log("Resposta da API:", response); // Adicione este log
      })
    );
  }

  getCatsImage(): Observable<CatImage[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey, // Adicione a apiKey nos headers
    });

    console.log("Fazendo requisição para:", this.apiUrl);

    return this.http.get<CatImage[]>(this.apiUrl, { headers }).pipe(
      tap(response => {
        console.log("Resposta da API:", response); // Adicione este log
      })
    );
  }

}
