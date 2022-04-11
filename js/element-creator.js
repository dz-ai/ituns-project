
export function elCreator(item) {

        if (!!item.trackName || !!item.primaryGenreName) {
            const template = `<div class="display-box">
            <img src="${item.artworkUrl60}" alt="artwork cover">
                <h3>${item.trackName || item.primaryGenreName}</h3>
                ${item.previewUrl ? 
            `<audio controls src="${item.previewUrl}"></audio>` : ''
            }
            
        </div> `
            return template
        }
}
let a;
let r = `dfsljhgsdj ${ a ?  `sdhfk` : ''}`