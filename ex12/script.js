'use strict';

class Options {
    constructor(height = '100', width = '200', bg = 'red', fontSize = '14', textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        div.textContent = 'Div!';
        div.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}pt;
            text-align: ${this.textAlign}`;
        document.body.append(div);
    }
}

let div1 = new Options('50', '100', 'blue', '24', 'center');
div1.createDiv();