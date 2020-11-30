export default function (URLObject) {
  let params = URLObject.searchParams.keys();

  for (let param of params) {
    URLObject.searchParams.delete(param);
  }
}
