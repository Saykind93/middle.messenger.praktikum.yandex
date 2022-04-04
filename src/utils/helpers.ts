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
      } catch(e) {
          lhs[p] = rhs[p];
      }
  }

  return lhs;
}
function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
      return object;
  }

  if (typeof path !== 'string') {
      throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
      [key]: acc,
  }), value as any);
  return merge(object as Indexed, result);
}

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
} 

export function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
} 

function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
  return isPlainObject(value) || isArray(value);
} 


function isEqual(lhs: Indexed, rhs: Indexed) {
  // Сравнение количества ключей объектов и массивов
if (Object.keys(lhs).length !== Object.keys(rhs).length) {
  return false;
}

for (const [key, value] of Object.entries(lhs)) {
  const rightValue = rhs[key];
  if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
          // Здесь value и rightValue может быть только массивом или объектом
          // И TypeScript это обрабатывает
    if (isEqual(value, rightValue)) {
      continue;
    }
    return false;
  }

  if (value !== rightValue) {
    return false;
  }
}

return true;
} 

export {set, isEqual}
