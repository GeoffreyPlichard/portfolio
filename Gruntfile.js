module.exports = function(grunt) {

  // ===========================================================================
  // CONFIG TASKS
  // ===========================================================================

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
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

    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %>  - plugins - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'css/plugins.css': ['css/plugins/*.css']
        }
      }
    },



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
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // ===========================================================================
  // CREATE TASKS
  // ===========================================================================

  // this default task will go through dev configuration
  grunt.registerTask('default', ['sass:dist','cssmin', 'watch']);

}
