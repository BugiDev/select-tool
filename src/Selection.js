/**
 * Created by bogdanbegovic on 9/18/17.
 */

let instance = null;

/*
 Singleton class used for Selection functionality, getting the selected text and calcualtion the positon of selected text.
 */
class Selection {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.selection = null;

        return instance;
    }

    /*
     Method for setting the Selection object.
     */
    setSelection(selection) {
        this.selection = selection;
    }

    /*
     Method for getting the Selection object.
     */
    getSelection() {
        return this.selection;
    }

    /*
     Method for setting the selected text from Selection object.
     */
    getSelectedText() {
        return this.selection.getRangeAt(0).toString();
    }

    /*
     Method for testing if the selected text is collapsed.
     */
    isCollapsed() {
        return document.getSelection().isCollapsed;
    }

    /*
     Method for getting the dimensions of selected text, based on bounding client rect.
     */
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
