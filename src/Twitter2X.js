chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "Twitter2X") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.match(/twitter/i)) {
                let textNodes = getTextNodesIn(elements[i]);
                for (let j = 0; j < textNodes.length; j++) {
                    textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/twitter/ig, "𝕏");
                }
            }
        }
    }
    else  if (request.message === "X2Twitter") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.match(/x/i) || elements[i].innerText.match(/𝕏/i)) {
                let textNodes = getTextNodesIn(elements[i]);
                for (let j = 0; j < textNodes.length; j++) {
                    textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/x/ig, "Twitter");
                    textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/𝕏/ig, "Twitter");
                }
            }
        }
    }

    else  if (request.message === "ツイッター2エックス") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.match(/ツイッター/i)) {
                let textNodes = getTextNodesIn(elements[i]);
                for (let j = 0; j < textNodes.length; j++) {
                    textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/ツイッター/ig, "エックス");
                }
            }
        }
    }

    else  if (request.message === "エックス2ツイッター") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.match(/エックス/i)) {
                let textNodes = getTextNodesIn(elements[i]);
                for (let j = 0; j < textNodes.length; j++) {
                    textNodes[j].nodeValue = textNodes[j].nodeValue.replace(/エックス/ig, "ツイッター");
                }
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