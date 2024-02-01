export class Musica {
    public titulo: string;
    public duracao: number;
    public genero: string;

    constructor(titulo: string, duracao: number, genero: string){
        this.titulo = titulo;
        this.duracao = duracao;
        this.genero = genero;
    }
}