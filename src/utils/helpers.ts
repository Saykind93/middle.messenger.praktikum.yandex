export type Indexed<T = any> = {
  [key in string]: T;
};
function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (let p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}
function set(
  object: any,
  path: string | unknown,
  value:any
): Indexed | unknown {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }
  if (path === "localChat" && value.type !== "message") {
    object.localChat = {};
  }
  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );
  return merge(object as Indexed, result);
}

function queryStringify(data) {
  let stringParam:any = [];
  for (let i in data) {
    stringParam.push(i + "=" + data[i].toString());
  }
  stringParam = "?" + stringParam.join("&");
  return stringParam;
}

export { set, queryStringify, merge };
