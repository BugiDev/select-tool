/**
 * Created by bogdanbegovic on 9/2/17.
 */

import Selection from './src/Selection';
import Popover from './src/Popover';
import './style/style.scss';

document.onselectionchange = function() {

    Selection.setSelection(document.getSelection());

    if (document.getSelection().isCollapsed) {
        Popover.hide();
    } else {
        Popover.show();
        Popover.reposition();
        Popover.setHrefLink();
    }
};
