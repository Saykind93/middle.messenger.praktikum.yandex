const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

// function queryStringify(data) {
//   let stringParam = [];
//   for (let i in data) {
//     stringParam.push(i + "=" + data[i].toString());
//   }
//   stringParam = "?" + r.join("&");
//   return stringParam;
// }

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response = void>(url: string = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + url);
  }

  public put<Response = void>(url: string, data: unknown, type?): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHODS.PUT,
      data,
    });
  }

  public delete<Response = void>(url: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHODS.DELETE,
      data,
    });
  }

  public post<Response = void>(url, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + url, {
      method: METHODS.POST,
      data,
    });
  }

  private request = (url, options = { method: METHODS.GET }) => {
    const { method, data } = options;
    //  console.log('zdesya', this.request<Response>(this.endpoint + url) )
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      // xhr.onreadystatechange = () => {
      //   if(xhr.readyState === XMLHttpRequest.done){
      //     if(xhr.status < 400) {
      //       resolve(xhr.response)
      //     } else {
      //       reject(xhr.response)
      //     }
      //   }

      // }
      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });


      if(url === 'https://ya-praktikum.tech/api/v2/user/profile/avatar'){
    }
    else{xhr.setRequestHeader("Content-type", "application/json");}

      xhr.withCredentials = true;
      xhr.responseType = "json";


      if (method === METHODS.GET || !data) {
        xhr.send();
      } 
      else if (url === 'https://ya-praktikum.tech/api/v2/user/profile/avatar')
      {
        xhr.send(data)
      }

      else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
