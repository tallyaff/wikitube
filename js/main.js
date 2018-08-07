'use strict'

var YT_KEY = 'AIzaSyAACI9lJvwY-wItR3DGSLpF6o5avw6XdCI';

function init (){
    var prm = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q='maluma'`)
    .then(function (res) {
        renderResults(res.data.items);
        renderVideo(res.data.items[0].id.videoId);
        getValueWiki('maluma');
    })
}




function searchValue() {
    var value = document.querySelector('.search').value;
    var prm = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`)
        .then(function (res) {
            renderResults(res.data.items);
            renderVideo(res.data.items[0].id.videoId);
            getValueWiki(value);
        })

}


function getValueWiki(term) {
    var prm = axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`)
        .then(function (res) {
            renderWiki(res.data);
        })

}




