const gulp   = require("gulp");
const minify = require("gulp-minify");
const strip  = require("gulp-strip-comments");
const rollup = require("gulp-rollup-2").rollup;

gulp.task("default", function build() {
    return gulp.src("./src/*.js")
        .pipe(rollup({
            output: [
                {
                    file: "anchor.js",
                    name: "es",
                    format: "es"
                },
                {
                    file: "anchor.umd.js",
                    name: "umd",
                    format: "umd"
                },
            ]
        }))
        .pipe(strip({safe: true}))
        .pipe(minify({ext: {min: ".min.js"}}))
        .pipe(gulp.dest("dist"))
});
