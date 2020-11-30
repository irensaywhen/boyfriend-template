export default function modifyHandle(handle) {
  return handle[0] === '@' ? handle : `@${handle}`;
}
