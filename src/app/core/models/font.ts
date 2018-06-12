export class Font {
    fontStyles: FontStyles = {};
    fontSizes: FontSizes = {};

    constructor() {
        this.initialFontStyles();
        this.initialFontSizes();
    }

    initialFontStyles() {
        const _fontStyle = [
            'Arial',
            'Serif',
            'Helvetica',
            'Sans-Serif',
            'Open Sans',
            'Roboto Slab'
        ]
        this.fontStyles.default = 'Sans-Serif';
        this.fontStyles.list = _fontStyle;
    }

    initialFontSizes() {
        const _size: number[] = [
            8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
        ];
        this.fontSizes.default = 14;
        this.fontSizes.list = _size;
    }
}


export interface FontStyles {
    default?: string;
    list?: string[];
}

export interface FontSizes {
    default?: number;
    list?: number[];
}