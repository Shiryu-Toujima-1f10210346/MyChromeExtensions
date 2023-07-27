document.querySelector("#btn").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let rtnPromise = chrome.tabs.sendMessage(tabs[0].id, {message: "clicked_browser_action"});
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