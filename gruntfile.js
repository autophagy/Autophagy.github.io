module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
          dist: {
            files: {
              'css/index.min.css': ['css/index.css']
            }
          }
        }
    });

    grunt.registerTask('default', ['cssmin']);

}
