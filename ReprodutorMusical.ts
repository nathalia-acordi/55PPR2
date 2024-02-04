import { IReprodutorMusical } from "./IReprodutorMusical";

export class ReprodutorMusical implements IReprodutorMusical {
    play(file: string): void {
        console.log('Tocanmdo' + file);
    }
    stop(): void {
        console.log('Música pausada');
    }

}