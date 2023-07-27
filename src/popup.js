document.querySelector("#btn").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let rtnPromise = chrome.tabs.sendMessage(tabs[0].id, {message: "X2Twitter"});
        rtnPromise
        .then((response) => {
            console.log(response);
        })

        .catch((error) => {
            console.log(error);
        });
        
    }
    );
}
);

document.querySelector("#btn2").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let rtnPromise = chrome.tabs.sendMessage(tabs[0].id, {message: "Twitter2X"});
        rtnPromise
        .then((response) => {
            console.log(response);
        })

        .catch((error) => {
            console.log(error);
        });
        
    }
    );
}
);

document.querySelector("#btn3").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let rtnPromise = chrome.tabs.sendMessage(tabs[0].id, {message: "ツイッター2エックス"});
        rtnPromise
        .then((response) => {
            console.log(response);
        })

        .catch((error) => {
            console.log(error);
        });
        
    }
    );
}
);

