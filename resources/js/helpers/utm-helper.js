/*
* helper para setarmos os parametros do utm a partir da query string
* */
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName;
    var i = 0;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === '' ? true : sParameterName[1];
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if(getUrlParameter("utm_source")){
    setCookie("utm_source", getUrlParameter("utm_source"), 30);
    setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== "" && document.referrer.search("google") > 0){
    setCookie("utm_source", "google", 30);
    setCookie("utm_medium", "organic", 30);
    setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== ""){
    setCookie("utm_source", "referral", 30);
    setCookie("utm_medium", document.referrer, 30);
    setCookie("utm_today", 1, 30);
}

if(getUrlParameter("utm_medium")){
    setCookie("utm_medium", getUrlParameter("utm_medium"), 30);
}

if(getUrlParameter("utm_campaign") && getUrlParameter("utm_campaign") !== ""){
    setCookie("utm_campaign", getUrlParameter("utm_campaign"), 30);
}

if(getUrlParameter("utm_term") && getUrlParameter("utm_term") !== ""){
    setCookie("utm_term", getUrlParameter("utm_term"), 30);
}

if(getUrlParameter("utm_content") && getUrlParameter("utm_content") !== ""){
    setCookie("utm_content", getUrlParameter("utm_content"), 30);
}

if(getUrlParameter("gclid") && getUrlParameter("gclid") !== ""){
    setCookie("gclid", getUrlParameter("gclid"), 30);
}
