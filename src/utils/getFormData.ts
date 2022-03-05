export function getFormData(formId: string) {
  const data = new FormData(document.getElementById(formId));
  let authFormDataObj: object = {};
  for (let [key, value] of data.entries()) {
    authFormDataObj[key] = value;
  }
  console.log(authFormDataObj);
}
