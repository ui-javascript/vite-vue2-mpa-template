import mpa from 'vite-plugin-mpa'; // 多页面处理
import VitePluginVue2Suffix from 'vite-plugin-vue2-suffix'; // 文件后缀处理
import { createVuePlugin } from 'vite-plugin-vue2';
import HtmlScriptPlugin from "./vite.entry.utils";
import styleImport from "vite-plugin-style-import";

export function createVitePlugins() {
  return [
    VitePluginVue2Suffix(),
    createVuePlugin(),
    mpa({
      scanDir: '__demo',
      scanFile: 'main.js',
      filename: 'index.html',
      open: true
    }),


    // html文件中，插入main.js文件的引用
    HtmlScriptPlugin(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    })
  ]
}