const styles = {
  success: { bg: 'var(--success-color, #27ae60)', icon: 'fa-check-circle' },
  warning: { bg: 'var(--warning-color, #f39c12)', icon: 'fa-exclamation-triangle' },
  error: { bg: 'var(--accent-color, #e74c3c)', icon: 'fa-times-circle' },
  info: { bg: 'var(--secondary-color, #3498db)', icon: 'fa-info-circle' },
}

let container

function getContainer() {
  if (!container) {
    container = document.createElement('div')
    container.id = 'toast-container'
    container.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      display: flex; flex-direction: column; gap: 10px;
    `
    document.body.appendChild(container)
  }
  return container
}

export function showToast(message, type = 'info', duration = 3000) {
  const style = styles[type] || styles.info
  const toast = document.createElement('div')
  toast.setAttribute('role', 'alert')
  toast.style.cssText = `
    display: flex; align-items: center; gap: 10px;
    background: ${style.bg}; color: white;
    padding: 14px 20px; border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: toastSlideIn 0.3s ease;
    font-family: 'Segoe UI', sans-serif; font-size: 0.95rem;
    min-width: 280px; max-width: 420px;
  `
  toast.innerHTML = `<i class="fas ${style.icon}"></i><span>${message}</span>`
  getContainer().appendChild(toast)
  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.3s ease forwards'
    setTimeout(() => toast.remove(), 300)
  }, duration)
}

const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes toastSlideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes toastSlideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`
document.head.appendChild(styleSheet)
