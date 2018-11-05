# Vue-Component-build
Vue is similar to angular/cli function automatic building component.

## 目的
* 方便TS的小伙伴接收类似NG的功能开发VUE代码分离从而更容易排查错误(注意!!! 可能会舍弃vue一部分模板类型自检的功能跳过某些BUG!).


## 代码环境
* node 8.6 +

## 安装
* sudo npm install @zhusj/vue-component-build -g

## 使用教程
* 以下 "${****}" 为可替换部分
* 在任意console路径下: vue-component --name ${you wanted to define Component Name} --path ${Relative path suffix of current path}
* vue-component --name test --path ./src/component/  
* 本版本提供以下简单创建方式
* vue-component ${you wanted to define Component Name}
* example: vue-component test (ps: path 默认是 ./src/components! 第一个参数为 组件名称 )

