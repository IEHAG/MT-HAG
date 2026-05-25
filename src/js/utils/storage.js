export function getItem(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key)
    return raw !== null ? JSON.parse(raw) : defaultValue
  } catch {
    return defaultValue
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    console.warn(`[storage] No se pudo guardar "${key}"`)
    return false
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // noop
  }
}
