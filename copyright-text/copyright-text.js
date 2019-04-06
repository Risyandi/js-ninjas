function CopyrightText() {
    var getSelection = window.getSelection();
    console.log(getSelection, ":value get selection");
    /** check the area selection is true */
    if (window.getSelection().containsNode(document.getElementsByClassName('main-wrapper')[0], true)) {
        var bodyElement = document.getElementsByTagName('body')[0];
        var selection = window.getSelection();
        var linkSource = "<br/><br/> *If you get reference from this articles, please for attached this link on the source: <a href='https://risyandi.com'>https://risyandi.com/</a>";
        var copyrightText = selection + linkSource;
        /** create a new element div */
        var newElement = document.createElement('div');
        newElement.style.left = '-99999px';
        newElement.style.position = 'absolute';
        bodyElement.appendChild(newElement);
        newElement.innerHTML = copyrightText;
        selection.selectAllChildren(newElement);
        /** time delete element after event copy */
        window.setTimeout(function () {
            bodyElement.removeChild(newElement);
        }, 0);
    }
}
document.oncopy = CopyrightText;