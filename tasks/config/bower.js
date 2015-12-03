/**
 * Link dependencies properly.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to put front-end dependencies to the better place (css in css folder, js in js folder)
 *
 */
module.exports = function (grunt) {
    grunt.config.set('bower', {
      dev: {
        dest: '.tmp/public',
        js_dest: '.tmp/public/js',
        css_dest: '.tmp/public/styles',
        scss_dest: 'assets/styles/'
      }
    });

    grunt.loadNpmTasks('grunt-bower');
};
