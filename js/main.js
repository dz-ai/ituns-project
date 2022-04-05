import {makeRequest} from "./make-request-foo.js";
import {elCreator} from "./element-creator-foo.js";

let $result_list_1,
    $input,
    $selector;

window.onBodyLoad = function () {
    $result_list_1 = $('#result_list');
    $input =         $('#input');
    $selector =      $('#selector');
}


window.onClicked = function  () {
    $result_list_1.empty();
    makeRequest(toHtml ,$result_list_1, $input.val(), $selector.val())
}

function toHtml (data) {
    data.results
        .map(item => $result_list_1.append(elCreator(item)))
}







