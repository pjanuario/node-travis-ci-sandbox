module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
      files: '<%= jshint.files %>',
      tasks: ['jshint']
    },

    jshint: {
      files: [
        'Gruntfile.js',
        '*.js'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true,
        globals: {
          _: false,
          console: false,
          expect: false,
          describe: false,
          before: false,
          beforeEach: false,
          afterEach: false,
          it: false,
          xit: false,
          setup: false,
          suite: false,
          teardown: false,
          test: false,
          jasmine: false,
          module: false,
          spyOn: false,
          require: false,
          __dirname: false,
          waits: false,
          waitsFor: false,
          runs: false,
          exports: false,
          process: false
        }
      }
    },

    jasmine_node: {
      coverage: {
        options : {
          failTask: true,
          branches : 100 ,
          functions: 100,
          statements:100,
          lines:100
        }
      },
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: '_spec'
      },
      unit: ['spec/unit/'],
      integration: ['spec/integration/']
    },

    env: {
      test: {
        NODE_ENV : 'test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node-coverage-validation');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', ['jshint', 'env:test', 'jasmine_node']);
};
