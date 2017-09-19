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

        this.popover.style.top = ((selecitionDimensions.top + document.body.scrollTop) - this.popover.offsetHeight) - 10 + 'px';
        this.popover.style.left = ((selecitionDimensions.left + document.body.scrollLeft) + Math.floor(selecitionDimensions.width / 2) - Math.floor(this.popover.offsetWidth / 2)) + 'px';
    }

    setHrefLink() {
        this.popover.href = 'http://twitter.com/intent/tweet?text=' + encodeURI(Selection.getSelectedText());
    }

}

export default new Popover();