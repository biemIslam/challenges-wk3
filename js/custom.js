const urlLabel = document.getElementById('input-url-label');
const shorten = document.getElementById('shorten');
const copy = document.getElementById('copy');
const displayUrl = document.getElementById('display-url');
const notEmpty = document.getElementById('not-empty');
var input = document.getElementById('url-input');
var shortUrl = document.getElementById('link');



    
function animateLabel() {

    var i = 0;
    const textLabel = 'Enter Your Url';
    var timeout = null;

    function typeText() {
        if (i < textLabel.length) {
            urlLabel.innerHTML += textLabel.charAt(i);
            i++;
            timeout = setTimeout(typeText, 100);
        } 
        else {
            timeout = setTimeout(eraseText, 100)
        }
    }
    typeText();

    function eraseText() {
        if (i >= 0) {
            var temp = textLabel.substring(0, i)
            urlLabel.innerHTML = temp;
            i--;
            timeout = setTimeout(eraseText, 100);
        }
        else {
            timeout = setTimeout(typeText, 100)
        }
    }
}
animateLabel()
// setInterval(() => {
//     timeout = setTimeout(animateLabel, 70);
// }, 3000);


shorten.addEventListener('click', () => {

    // const urlStart = 'https://';
    const urlDomain = 'short.url';
    var randomStr = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);

    if (input.value !== '') {
        notEmpty.style.display = 'none'; 
        displayUrl.style.display = 'block';
        var checkUrl = input.value;
        var checkProtocol = checkUrl.includes('https://');

        

        if (checkProtocol) {
            // alert(true)
            shortUrl.innerHTML = 'https://' + 'short.url/' + randomStr.toLocaleUpperCase();
            shortUrl.addEventListener('click', () => {
                document.getElementById('visit-link').href = checkUrl;
            })
        }
        else {
            shortUrl.innerHTML = 'http://' + 'short.url/' + randomStr.toLocaleUpperCase();
            shortUrl.addEventListener('click', () => {
                document.getElementById('visit-link').href = checkUrl;
            })
        }
    }

    else {
        var emptyUrl = notEmpty.innerHTML = 'Field can not be empty';
        displayUrl.style.display = 'none';
    }
    
})

copy.addEventListener('click', () => {
    copy.innerHTML = 'COPIED';
    var getUrl = shortUrl.innerText;
    // alert(getUrl);
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = getUrl;
    temp.select();
    

    // shortUrl.select();
    // shortUrl.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(temp);
})