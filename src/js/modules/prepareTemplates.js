export default function prepareTemplates(templates) {
  switch (typeof templates) {
    case 'object':
      for (let id in templates) {
        templates[id] = document.getElementById(templates[id]).innerHTML;
      }
      break;
    case 'string':
      templates = document.getElementById(templates).innerHTML;
      break;
  }
  return templates;
}
