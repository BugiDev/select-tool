/**
 * Created by bogdanbegovic on 9/18/17.
 */

let instance = null;

class Selection {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.selection = null;

        return instance;
    }

    setSelection(selection) {
        this.selection = selection;
    }

    getSelection() {
        return this.selection;
    }

    getSelectedText() {
        return this.selection.getRangeAt(0).toString();
    }

    isCollapsed() {
        return this.selection.isCollapsed();
    }

    getDimensions() {
        const boundingClientRect = this.selection.getRangeAt(0).getBoundingClientRect();
        return {
            top: boundingClientRect.top,
            bottom: boundingClientRect.bottom,
            left: boundingClientRect.left,
            right: boundingClientRect.right,

            width: boundingClientRect.width,
            height: boundingClientRect.height
        };
    }

}

export default new Selection();
