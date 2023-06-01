function domainName(url){
   let newUrl = url.replace("http://", "");
  newUrl = newUrl.replace("https://", "");
  newUrl = newUrl.replace('www.', '')
return newUrl.slice(0, newUrl.indexOf("."))
}