## 什么是TypeScript
- TypeScript是javascript的超集，遵循最新的ES6/ES7规范，Typescript扩展了Javascript语法。
- 安装TS  npm install typescript -g
- tsc --init 生成配置文件 
- tsc --watch 实时编译
- 希望可以直接允许ts:  code-runner + npm i ts-node -g

> 全局编译， code-runner用node环境来执行ts

## 用构建工具来处理TS
- webpack
- rollup
- 解析ts的方式有两种
    - 通过ts插件来解析
    - 通过babel来解析
- rollup一般情况下采用 rollup-plugin-typescript2
- webpack一般情况下解析ts-loader / babel-plugin-typescript