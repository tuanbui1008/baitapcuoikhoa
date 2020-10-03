function filter() {
    var FilterValue, input, ul, li, i, text;
    input = document.getElementById('search');
    // console.log(input.value);
    FilterValue = input.value;
    // console.log(FilterValue);  
    ul = document.getElementsByClassName('menu');
    li = document.getElementsByClassName('col-lg-4');
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('h2')[0];
        text = a.textContent.toLowerCase(FilterValue)
        console.log(text);
        console.log(a);
        if (text.indexOf(FilterValue) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }


}