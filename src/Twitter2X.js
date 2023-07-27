chrome.runtime.onMessage.addListener(function() {
    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText.match(/twitter/i)) {
            let textNodes = getTextNodesIn(elements[i]);
            for (let j = 0; j < textNodes.length; j++) {
                textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/twitter/ig, "𝕏");
            }
        }
    }

    function getTextNodesIn(node) {
        let textNodes = [];
        if (node.nodeType == Node.TEXT_NODE) {
            textNodes.push(node);
        } else {
            let children = node.childNodes;
            for (let i = 0; i < children.length; i++) {
                textNodes.push(...getTextNodesIn(children[i]));
            }
        }
        return textNodes;
    }
});