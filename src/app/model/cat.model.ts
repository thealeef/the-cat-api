export interface Imagem {
    url: string;
}

export interface Cat {
    id: string;
    image: any;
    name: string;
    breed: string;
}

export interface CatImage {
    id: string;
    image: Imagem;
    name: string;
    origin: string;
    description: string;
    temperament: string;
}