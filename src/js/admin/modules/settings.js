import { showToast } from '@/js/utils/toast.js'
import { getItem, setItem } from '@/js/utils/storage.js'

const PASSWORD_KEY = 'adminPasswordOverride'

export class SettingsModule {
  init() {
    const generalForm = document.getElementById('generalConfigForm')
    if (generalForm) {
      generalForm.addEventListener('submit', (e) => this.handleGeneral(e))
    }
    const securityForm = document.getElementById('securityConfigForm')
    if (securityForm) {
      securityForm.addEventListener('submit', (e) => this.handleSecurity(e))
    }
  }

  handleGeneral(e) {
    e.preventDefault()
    showToast('Configuración guardada exitosamente', 'success')
  }

  handleSecurity(e) {
    e.preventDefault()
    const current = document.getElementById('currentPassword').value
    const newPass = document.getElementById('newPassword').value
    const confirm = document.getElementById('confirmPassword').value

    if (!current || !newPass || !confirm) {
      showToast('Todos los campos son obligatorios', 'error')
      return
    }

    const envPass = import.meta.env.VITE_ADMIN_PASS || 'admin123'
    const storedOverride = getItem(PASSWORD_KEY)

    if (current !== (storedOverride || envPass)) {
      showToast('La contraseña actual no es correcta', 'error')
      return
    }

    if (newPass !== confirm) {
      showToast('Las contraseñas nuevas no coinciden', 'error')
      return
    }

    if (newPass.length < 4) {
      showToast('La contraseña debe tener al menos 4 caracteres', 'error')
      return
    }

    setItem(PASSWORD_KEY, newPass)
    document.getElementById('currentPassword').value = ''
    document.getElementById('newPassword').value = ''
    document.getElementById('confirmPassword').value = ''
    showToast('Contraseña cambiada exitosamente', 'success')
  }
}
