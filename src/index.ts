#!/usr/bin/env node
import fs from 'fs'

const covert = (str: string): string => {
    return str.replace(/-([a-z])/g, function (all, letter) {
        return letter.toUpperCase();
    });
}

const vueComponentBuild = (argv: any[]) => {

    console.log(`当前参数:${JSON.stringify(argv)}`);
    var filename, path;

    if (argv.length > 1) {
        if (argv[argv.findIndex(p => p == "--name") + 1]) {
            filename = argv[argv.findIndex(p => p == "--name") + 1];
        }
        else {
            console.log(`--name 后没有文件姓名,参数无效`);
            return false;
        }
        if (argv[argv.findIndex(p => p == "--path") + 1]) {
            filename = argv[argv.findIndex(p => p == "--path") + 1];
        }
        else {
            console.log(`--path 后没有文件路径,参数无效`);
            return false;
        }
    }
    else {
        path = "src/components/"
        filename = argv[0];
    }
    if (filename && path) {
        let basepath = process.cwd() + "/";
        console.log(`当前创建的根路径:${basepath}`);
        /** 组件文件夹不存在 */
        if (!fs.existsSync(basepath + path + filename)) {
            /** 创建文件夹 */
            fs.mkdirSync(basepath + path + filename + "/");

            /** 创建同名的 文件 *.vue *.ts *.scss *.html */
            var typescriptfile = covert(filename) + ".ts";
            var scssfile = covert(filename) + ".scss";
            var templatefile = covert(filename) + ".html";
            var vuefile = covert(filename) + ".vue";

            let temppath = basepath + path + filename + "/";

            fs.writeFileSync(temppath + vuefile, `
<template lang="html" src="./${covert(filename)}.html"></template>
<style scoped lang="scss" src="./${covert(filename)}.scss"></style>
<script lang="ts" src="./${covert(filename)}.ts"></script>
            `, "utf8");

            fs.writeFileSync(temppath + templatefile, `
<div>
    <p> this is template of ${covert(filename)} </p>
</div>
            `, "utf8");

            fs.writeFileSync(temppath + scssfile, ``, "utf8");

            fs.writeFileSync(temppath + typescriptfile, `
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components:{}
})
export default class ${covert(filename)} extends Vue {

    constructor() {
        super();
    }

    public mounted(): void {
        this.init();
    }

    public async init(): Promise<void> {
        
    }

}
            `, "utf8");

            console.log("component building finished .....")


        } else {
            throw new Error("该目录 " + basepath + path + filename + " 下已经存在同名组件");
        }
    }
}

vueComponentBuild(process.argv.slice(2));