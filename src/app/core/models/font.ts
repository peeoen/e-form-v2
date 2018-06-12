export class Font {
    // fonts: {text:string, value:string}[] = []; 
    fonts: string[] = []; 


    constructor() {
        const _fonts = [
            'Arial', 
            'Serif', 
            'Helvetica', 
            'Sans-Serif', 
            'Open Sans', 
            'Roboto Slab'
        ]

        this.fonts =  _fonts;
    }
}