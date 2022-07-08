## 安装ts
- npm install typescript -g --force
- tsc --init 生成配置文件
- 直接运行ts code runner + npm install ts-node -g

## 构建工具来处理ts
- webpack rollup
- 解析ts的方式，ts插件来解析，babel解析，rollup 一般情况采用rollup-plugin-typescripts / webpack ts-loader、babel-plugin-typescript
- ts转es6是ts.config.json中配置的 "target": "es2016"，ts自己转，不需要我们额外配置
- "dev": "rollup -cw" //使用配置文件并且观测文件的变化