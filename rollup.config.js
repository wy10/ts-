import {nodeResolve} from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import path from 'path'
// rollup.config.js支持es6语法
export default {
  input:'src/基础类型.ts',
  output:{
    file:path.resolve(__dirname,'dist/bundle.js'),
    format:'iife',//这个代码打包后是可以立即执行的函数,类似于webpack打包后的文件是一个自执行函数
    sourcemap:true
  },
  plugins:[
    // 顺序：先把第三方模块拿出来解析，解析之后启用服务
    nodeResolve({
      extensions:['.js','.ts']
    }),
    ts({
      tsconfig:path.resolve(__dirname,'tsconfig.json')
    }),
    serve({
      port:3000,
      contentBase:'',
      openPage:'/public/index.html'
    })
  ]
}