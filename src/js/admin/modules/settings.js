import { showToast } from '@/js/utils/toast.js'

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
    showToast('Contraseña cambiada exitosamente', 'success')
  }
}
