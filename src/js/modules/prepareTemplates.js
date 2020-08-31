export default function prepareTemplates(templates) {
  for (let id in templates) {
    templates[id] = document.getElementById(templates[id]).innerHTML;
  }

  return templates;
}
