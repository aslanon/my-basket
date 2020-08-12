import Vue from 'vue'

import HelloWorld from './HelloWorld'
import AppHeader from './app-header'

const components = [HelloWorld, AppHeader]

components.forEach(component => {
  Vue.component(component.name, component)
})

export { HelloWorld, AppHeader }
