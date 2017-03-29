var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    path = require('path');

module.exports = function(logger, platformsData, projectData, hookArgs) {
    var appFolderPath = path.join(projectData.projectDir, 'app');

    return new Promise(function(resolve, reject) {

        gulp.task('clean:tests', function() {
            return del(appFolderPath + '/tests/.tmp/**/*.js', { force: true });
        });

        gulp.task('move:tests', function() {
            return gulp.src(appFolderPath + '/**/*.js')
                .pipe(gulp.dest(appFolderPath + '/tests/.tmp'))
        });

        gulp.task('prepare:tests', function(callback) {
            return runSequence('clean:tests', [
                'move:tests'
            ], callback);
        });

        gulp.start('prepare:tests', function() {
            resolve();
        });

    });
};
