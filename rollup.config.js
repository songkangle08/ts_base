import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import path from 'path';

export default{
    input: 'src/index.ts',
    output:{
        file: path.resolve(__dirname,'dist/bundle.js'),
        // global  弄个全局变量来接受
        // cjs  module.exports
        // esm  export default
        // iife ()()  打包成自执行函数
        // umd  umd umd+commonJS规范，不包含es6规范
        format: 'iife',  
        sourcemap: true,
    },
    plugins:[
        nodeResolve({
            extensions: ['.js','.ts']
        }),
        ts({
            tsconfig : path.resolve(__dirname,'tsconfig.json')
        }),
        serve({
            port: 3000,
            contentBase: '',
            // open: true,
            openPage: '/public/index.html'
        })
    ]
}