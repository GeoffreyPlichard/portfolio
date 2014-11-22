module.exports = function(grunt) {

  // ===========================================================================
  // CONFIG TASKS
  // ===========================================================================

  grunt.initConfig({
    
    
    sass: {
      dist: {
        options: {
          style: 'expanded',
          lineNumbers: false
        },
        files: {
          'css/main.css': 'css/sass/main.scss'
        }
      }
    },



    /*
     * Watch Task
     * Rebuild all the application when a file is changed
     * dist: the default process target
     * files: when these files are saved,
     * task: do this tasks
     */
    watch: {
      dist: {
        files: ['css/sass/**'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      }
    }

  }); // End Init Config

  // ===========================================================================
  // LOAD GRUNT PLUGINS
  // ===========================================================================

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // ===========================================================================
  // CREATE TASKS
  // ===========================================================================

  // this default task will go through dev configuration
  grunt.registerTask('default', ['sass:dist','watch']);

}
