import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
    build: {
        html:   buildFolder +"/",
        js:     buildFolder + "/assets/js/",
        css:    buildFolder + "/assets/css/",
        images: buildFolder + "/assets/images/",
        fonts:  buildFolder + "/assets/fonts/",
		files:  buildFolder + "/assets/files/"
    },
    src: {
        html:   srcFolder + "/*.html",
        js:     srcFolder + "/assets/js/*.js",
        scss:   srcFolder + "/assets/scss/*.scss",
        images: srcFolder + "/assets/images/**/*.{jpg,png,jpeg,gif,ico,webp,webmanifest,xml,json}",
        svg: 	srcFolder + "/assets/images/**/*.svg",
        svgicons: 	srcFolder + "/assets/images/icons/**/*.svg",
        fonts:  srcFolder + "/assets/fonts/**/*.{otf,eot,woff,woff2,ttf}",
        files:  srcFolder + "/assets/files/**/*.*"
    },
    watch: {
        html:   srcFolder + "/**/*.html",
        js:     srcFolder + "/assets/js/**/*.js",
        scss:   srcFolder + "/assets/scss/**/*.scss",
        images: srcFolder + "/assets/images/**/*.{jpg,png,jpeg,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts:  srcFolder + "/assets/fonts/**/*.{otf,eot,woff,woff2,ttf}",
		files:  srcFolder + "/assets/files/**/*.*"
    },
    clean: buildFolder,
	buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}