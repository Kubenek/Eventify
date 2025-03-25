function loadModule(path, targetElementID) {
    fetch(path) 
        .then(response => {
            if(!response.ok) {
                throw new Error("Failed to load HTML from " + path)
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(targetElementID).innerHTML = html;
        })
        .catch(error => {
            console.log("Error in loading module: ", error)
        })
}