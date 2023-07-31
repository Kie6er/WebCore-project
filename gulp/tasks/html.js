import fileInclude from "gulp-file-include";
import panini from "panini";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
	panini.refresh();
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(panini({
			root:       `${app.path.srcFolder}` + '/',
			layouts:    `${app.path.srcFolder}` + '/layouts/',
			partials:   `${app.path.srcFolder}` + '/partials/',
			helpers:    `${app.path.srcFolder}` + '/helpers/',
			data:       `${app.path.srcFolder}` + '/data/'
		}))
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'assets/images/'))
		.pipe(app.plugins.replace(/@js\//g, 'assets/js/'))
		.pipe(app.plugins.replace(/@scss\//g, 'assets/css/'))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNosvg()
			)
		)	
		.pipe(
			app.plugins.if(
				app.isBuild,
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			}))
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}