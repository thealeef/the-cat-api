import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../service/cat.service';
import { Cat, CatImage, Imagem } from '../../../model/cat.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {

  breeds: any[] = [];
  images: any[] = [];
  selectedBreed: string = '';

  cats: CatImage[] = [];

  oneCat: any;
  listCats: any[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCatsImage().subscribe(cats => {
      this.cats = cats;
    });

    for (let cat in this.cats) {
      if (Number(cat) < 4) {
        this.listCats.push(this.cats[cat])
      }
    }

    // Teste para mostrar um gato
    //console.log(this.cats[0])
    //console.log('Retorno na Tela: ', this.cats[0])
    //this.oneCat = this.cats[0]

    //console.log('Mostra um gato: ', this.oneCat)
    //console.log('Nome do Gato: ', this.oneCat.name)
    //console.log('Raça do Gato: ', this.oneCat.breed)
    //console.log('URL do Gato: ', this.oneCat.image.url)
  }
}
