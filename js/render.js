'use strict'





function renderVideo(video) {
        
    var strHtml = `<iframe src="https://www.youtube.com/embed/${video}"></iframe>`;

    document.querySelector('.selected-video').innerHTML = strHtml;
}


function renderWiki(data) {

    var strHtmls = data.map(function (wikiValue) {
        return `
        <li><p>${wikiValue}</p></li>
    `
    });
    document.querySelector('.wikipedia-result').innerHTML = strHtmls.join('');
}





function renderResults(results) {
    // debugger;
    var strHtmls = results.map(function (result) {
        return `
           <li onclick='renderVideo("${result.id.videoId}")'><div class='img-container'><img class='video-img' src='${result.snippet.thumbnails.medium.url}'/></div>
             <div class="title flex">${result.snippet.title}</div></li>
        `
    });
    document.querySelector('.videos-list').innerHTML = strHtmls.join('');

}