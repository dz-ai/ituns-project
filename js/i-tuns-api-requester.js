const url =  'https://itunes.apple.com/search?'

export async function makeRequest (input, selector) {
    const response = await fetch(url + `term=${input}&media=${selector}`),
         json = await response.json()
    return json

}