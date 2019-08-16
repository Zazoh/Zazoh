var noCache = Math.random();

function loadDoc(whichDoc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    parseData(this);
    }
  };
  xhttp.open("GET", whichDoc+".xml?"+noCache, true);
  xhttp.send();
}

function parseData(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var blogData="";
  var x = xmlDoc.getElementsByTagName("POST");
  for (i = 0; i <x.length; i++) { 
    blogData += "<span class='subtitle'>" +
    x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
    " -- " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</span><br /><br />" +
    x[i].getElementsByTagName("BODY")[0].childNodes[0].nodeValue +
    "<hr noshade size='1' color='#cccccc'>";
  }
  document.getElementById("blog").innerHTML = blogData 
}
