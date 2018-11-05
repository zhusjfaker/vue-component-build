#!/usr/bin/env node

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
        console.log(basepath);
    }
}

vueComponentBuild(process.argv.slice(2));