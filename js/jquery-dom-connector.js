// DOM CONNECTOR //

let $result_list,
    $input,
    $selector;

export function onBodyLoad () {
    $result_list = $('#result_list');
    $input =       $('#input');
    $selector =    $('#selector');
}

export function onEnter (makeRequest, elCreator) {
    $('#input').keypress(e => {
        if (e.which === 13) {
            clear();
            makeRequest(input(), selector())
                .then(data => toHtml(elCreator, data))
        }
    });
}

export function clear () {
    $result_list.empty()
}

export function input () {
    return $input.val()
}

export function selector () {
    return $selector.val()
}

export function toHtml (elCreator, data) {
    data.results
        .map(item => $result_list.append(elCreator(item)))
}





