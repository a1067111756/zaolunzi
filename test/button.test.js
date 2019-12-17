import './index'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

import Vue from 'vue'
import Button from '../src/button'

describe('Button', () => {
  // BDD行为驱动测试
  it('存在', () => {
    expect(Button).to.be.ok
  })

  it('可以设置Icon', () => {
    const TestButton = Vue.extend(Button)
    const vm = new TestButton({
      propsData: {
        icon: 'delete'
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-delete')
    vm.$destroy()
  })

  it('可以设置loading', () => {
    const TestButton = Vue.extend(Button)
    const vm = new TestButton({
      propsData: {
        icon: 'delete',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
    vm.$destroy()
  })

  it('点击button 触发click事件', () => {
    const TestButton = Vue.extend(Button)
    const vm = new TestButton({
      propsData: {
        icon: 'delete'
      }
    })
    vm.$mount()
    let spy = chai.spy(function () {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$destroy()
  })
})
