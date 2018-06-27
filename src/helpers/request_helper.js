const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200){
      console.err(xhr.status);
      return;
    }

    const json = JSON.parse(xhr.responseText);
    onComplete(json);
  });
  xhr.send();
};

module.exports = Request;
