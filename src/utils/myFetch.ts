const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

function queryStringify(data) {
  let r = [];
  for (let i in data) {
    r.push(i + "=" + data[i].toString());
  }
  r = "?" + r.join("&");
  return r;
}

class HTTPTransport {
  get = (url, options = {}) => {
    let { data } = options;
    url = queryStringify(data);
    console.log(url);
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  put = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    )
      .then((data) => JSON.stringify(data.response))
      .then((test) => console.log(test));
  };
  post = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    )
      .then((data) => JSON.stringify(data.response))
      .then((test) => console.log(test));
  };
  delete = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    )
      .then((data) => JSON.stringify(data.response))
      .then((test) => console.log(test));
  };

  request = (url, options = { method: METHODS.GET }, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      // set timeout
      xhr.timeout = timeout; // 5 seconds

      // listen for `timeout` event
      xhr.ontimeout = () => console.log("Request timeout.", xhr.responseURL);
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
