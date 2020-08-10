import Vue from 'vue'

import HelloWorld from './HelloWorld'

const components = [HelloWorld]

components.forEach(component => {
  Vue.component(component.name, component)
})

export { HelloWorld }
