import Vue from 'vue' // 导入Vue用于生成Vue实例
import VickySelector from '@/components/vickySelector/index.vue' // 导入组件
import { destroyVM, createTest,triggerEvent } from '../util'
let expect = require('chai').expect
// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('VickySelector组件', () => {
  // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('创建组件', () => {
    vm = createTest(VickySelector, {
        selectorDatasLists: {
            chooseItem: {
              status: false, // 是否点击确定按钮
              content: ''// input value
            }, // 选择之后替换掉input的value值
            showSelector: false, // 是否显示底部selector
            showMask: false, // 是否展示蒙层
            ItemDatas: [// selector 选项列表
              {index: 0, textContent: '小学'},
              {index: 1, textContent: '初中'},
              {index: 2, textContent: '高中'},
              {index: 3, textContent: '大专'},
              {index: 4, textContent: '本科'},
              {index: 5, textContent: '硕士'},
              {index: 6, textContent: '博士'},
              {index: 7, textContent: '其他'}
            ]
          },
    }, true);
    expect(vm.$el.classList.contains('vicky-selector-container')).to.be.true
  });

  it('展示蒙层', () => {
    vm = createTest(VickySelector, {
        selectorDatasLists: {
            showMask: true, // 是否展示蒙层
          },
    }, true);
    const maskGroup = vm.$el.querySelector('.vicky-selector-container div')
    expect(maskGroup.classList.contains('mask')).to.be.true
  });

  it('显示底部selector', () => {
    vm = createTest(VickySelector, {
        selectorDatasLists: {
            showSelector: true, // 是否显示底部selector
          },
    }, true);
    const selectorGroup = vm.$el.querySelector('.vicky-selector-group div')
    expect(selectorGroup.classList.contains('selector-header')).to.be.true
    const itemsGroup = vm.$el.querySelector('.selector-items-group')
    expect(itemsGroup.classList.contains('selector-items-group')).to.be.true
  });

})


  