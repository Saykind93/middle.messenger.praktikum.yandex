import { queryStringify } from "./helpers";

const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;
  code: any;
  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response = void>(
    url: string = "/",
    data?: unknown,
    type?: unknown
  ): Promise<any> {
    return this.request(this.endpoint + url);
  }

  public put<Response = void>(
    url: string,
    data: any,
    type?: string
  ): Promise<any> {
    return this.request(
      this.endpoint + url,
      {
        method: METHODS.PUT,
        data,
      },
      type
    );
  }

  public delete<Response = void>(url: string, data: any): Promise<any> {
    return this.request(this.endpoint + url, {
      method: METHODS.DELETE,
      data,
    });
  }

  public post<Response = void>(url, data?: any): Promise<any> {
    return this.request(this.endpoint + url, {
      method: METHODS.POST,
      data,
    });
  }

  private request = (
    url,
    options = { method: METHODS.GET, data: undefined },
    type = "application/json"
  ) => {
    const { method, data } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error: any = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      xhr.setRequestHeader("Content-type", type);

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (type === "multipart/form-data") {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
