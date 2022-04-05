let $result_list_1,
    $input,
    $selector;

function onLoad () {
    $result_list_1 = $('#result_list');
    $input =         $('#input');
    $selector =      $('#selector');
}

function elCreator(item) {
    if (!!item.trackName || !!item.primaryGenreName) {
        const template = `<div class="display-box">
            <img src="${item.artworkUrl60}" alt="artwork cover">
                <h3>${item.trackName || item.primaryGenreName}</h3>
                <audio controls src="${item.previewUrl}"></audio>
        </div> `
        return $(template)
    }
}

function onClicked () {
    $result_list_1.css('display','block' )
    $result_list_1.empty();
    fetch(` https://itunes.apple.com/search?term=${$input.val()}&media=${$selector.val()}`)
            .then(response => response.json())
            .then(data => {
                data
                    .results
                    .map((res) => {
                        console.log(res)
                        $result_list_1.append(elCreator(res))
                    });

            })
}


