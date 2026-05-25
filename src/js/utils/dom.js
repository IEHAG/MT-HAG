export function $(selector, context = document) {
  return context.querySelector(selector)
}

export function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector))
}

export function val(el) {
  if (typeof el === 'string') el = $(el)
  return el ? el.value : ''
}

export function setVal(el, value) {
  if (typeof el === 'string') el = $(el)
  if (el) el.value = value
}

export function show(el) {
  if (typeof el === 'string') el = $(el)
  if (el) el.style.display = ''
}

export function hide(el) {
  if (typeof el === 'string') el = $(el)
  if (el) el.style.display = 'none'
}

export function html(el, content) {
  if (typeof el === 'string') el = $(el)
  if (el) el.innerHTML = content
}
