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

    init() {
        const me = this;
        document.onselectionchange = function() {
            me.selection = document.getSelection();
            console.log(me.getSelectedText());
        };
    }

    getSelectedText() {
        return this.selection.getRangeAt(0).toString();
    }

}

export default new Selection();
