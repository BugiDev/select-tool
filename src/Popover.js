/**
 * Created by bogdanbegovic on 9/19/17.
 */

import Selection from './Selection';

let instance = null;

/*
 Singleton class used for Popover show/hide functionality and position calculation.
 */
class Popover {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.popover = document.getElementById('pop-over');

        return instance;
    }

    /*
    Method for showing the popover.
     */
    show() {
        this.popover.style.display = 'block';
    }

    /*
     Method for hiding the popover.
     */
    hide() {
        this.popover.style.display = 'none';
    }

    /*
     Method for calculating the popover position and setting the position based on selected text dimensions.
     */
    reposition() {
        const selectionDimensions = Selection.getDimensions();

        let calculatedTop = ((selectionDimensions.top + document.body.scrollTop) - this.popover.offsetHeight) - 10;
        let calculatedLeft = ((selectionDimensions.left + document.body.scrollLeft) + Math.floor(selectionDimensions.width / 2) - Math.floor(this.popover.offsetWidth / 2));

        if (calculatedTop < 0) {
            this.popover.style.top = selectionDimensions.bottom + 10 + 'px';
        } else {
            this.popover.style.top = calculatedTop + 'px';
        }

        //Minimal left is 10px
        if (calculatedLeft < 10) {
            calculatedLeft = 10;
        }

        //Maximal left is clientWidth minus size of the twitter share button plus 10px for padding
        if (calculatedLeft > document.documentElement.clientWidth - 60) {
            calculatedLeft = document.documentElement.clientWidth - 60;
        }

        this.popover.style.left = calculatedLeft + 'px';
    }

    /*
     Method for setting the href parameter of the popover anchor tag.
     */
    setHrefLink() {
        this.popover.href = 'http://twitter.com/intent/tweet?text=' + encodeURI(Selection.getSelectedText());
    }

}

export default new Popover();
