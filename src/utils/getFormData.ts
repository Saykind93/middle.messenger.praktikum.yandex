export function getFormData(formId: string): any {
  let formObj:any = document.getElementById(formId)
  let data:any = new FormData(formObj);
  let authFormDataObj: object = {};
  for (let [key, value] of data.entries()) {
    authFormDataObj[key] = value;
  }
  return authFormDataObj;
}
