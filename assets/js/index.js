
function includejs(script_filename) {
    var script = document.createElement('script');
    script.src = script_filename;
    script.type = 'text/javascript';
    script.defer = true;
    document.head.appendChild(script);
}


includejs("assets/js/scrollreveal.min.js")
includejs("assets/js/main.js")
includejs("assets/js/translation.js")
includejs("assets/js/modal.js")
includejs("assets/js/theme.js")