
if(navigator.userAgent.toLowerCase().match(/mobile/i)) { 
     document.write('<link rel="stylesheet" href="mobilestyle.css" />');
} else {
    document.write('<link rel="stylesheet" href="style.css" />');
}
