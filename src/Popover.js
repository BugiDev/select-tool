/**
 * Created by bogdanbegovic on 9/19/17.
 */

import Selection from './Selection';

let instance = null;

class Popover {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.popover = document.getElementById('pop-over');

        return instance;
    }

    show() {
        this.popover.style.display = 'block';
    }

    hide() {
        this.popover.style.display = 'none';
    }

    reposition() {
        const selecitionDimensions = Selection.getDimensions();

        let calculatedTop = ((selecitionDimensions.top + document.body.scrollTop) - this.popover.offsetHeight) - 10;
        let calculatedLeft = ((selecitionDimensions.left + document.body.scrollLeft) + Math.floor(selecitionDimensions.width / 2) - Math.floor(this.popover.offsetWidth / 2));
        let calculatedBottom;

        if (calculatedTop < 0) {
            calculatedBottom = selecitionDimensions.bottom;
            this.popover.style.top = calculatedBottom + 10 + 'px';
        } else {
            this.popover.style.top = calculatedTop + 'px';
        }

        if (calculatedLeft < 10) {
            calculatedLeft = 10;
        }

        this.popover.style.left = calculatedLeft + 'px';

        console.log(this.popover.style.top);
        console.log(this.popover.style.left);

    }

    setHrefLink() {
        this.popover.href = 'http://twitter.com/intent/tweet?text=' + encodeURI(Selection.getSelectedText());
    }

}

export default new Popover();
