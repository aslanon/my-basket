import Vue from 'vue'

import AppHeader from './app-header'
import Card from './card'

const components = [AppHeader, Card]

components.forEach(component => {
  Vue.component(component.name, component)
})

export { AppHeader, Card }
