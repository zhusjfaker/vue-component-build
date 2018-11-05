#!/usr/bin/env node

const vueComponentBuild = (argv: any[]) => {
    console.log(JSON.stringify(argv));
}

vueComponentBuild(process.argv.slice(2));