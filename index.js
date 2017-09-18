/**
 * Created by bogdanbegovic on 9/2/17.
 */

document.onselectionchange = function() {
    console.log('Selection changed!');
    let selection = document.getSelection();
    console.log(selection.getRangeAt(0).toString());
};
