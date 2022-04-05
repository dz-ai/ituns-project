
// module

function elCreator(item) {
    if (!!item.trackName || !!item.primaryGenreName) {
        const template = `<div class="display-box">
            <img src="${item.artworkUrl60}" alt="artwork cover">
                <h3>${item.trackName || item.primaryGenreName}</h3>
                <audio controls src="${item.previewUrl}"></audio>
        </div> `
       return template
    }
}

export {elCreator}