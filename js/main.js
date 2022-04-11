import {onBodyLoad, input, selector, toHtml, clear, onEnter} from "./jquery-dom-connector.js";
import {makeRequest} from "./i-tuns-api-requester.js";
import {elCreator} from "./element-creator.js";


window.onLoad = () => {
  onBodyLoad();
}

window.enter = () => {
    onEnter(makeRequest, elCreator)
}

window.onClick = async () => {
    clear();
   const data = await makeRequest(input(), selector());
    toHtml(elCreator, data);
}







