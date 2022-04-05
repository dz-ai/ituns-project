
// module
function makeRequest (toHtml, result_list_1, input, selector) {
    fetch(` https://itunes.apple.com/search?term=${input}&media=${selector}`)
        .then(response => response.json())
        .then(data => toHtml(data))
}

export {makeRequest}



