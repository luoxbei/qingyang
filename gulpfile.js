let gulp = require('gulp');//等价于HTML代码：<script src='gulp.js'>

gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare"));
	});
	gulp.watch("img/*.{jpg,png,gif}",async ()=>{
		gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\img"));
	});
	gulp.watch("img/*/*.{jpg,png,gif}",async ()=>{
		gulp.src("img/*/*.{jpg,png,gif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\img"));
	});
	gulp.watch("font/*.{eot,svg,ttf,woff,woff2}",async ()=>{
		gulp.src("font/*.{eot,svg,ttf,woff,woff2}").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\font"));
	});
	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\js"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\css"));
	});
	gulp.watch("php/*.php",async ()=>{
		gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\clearhaircare\\php"));
	});
});