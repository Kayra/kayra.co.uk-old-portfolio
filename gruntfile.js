module.exports = function(grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            sass: {
                files: ['styles/sass/styles.sass'],
                tasks: ['sass']
            }
        },
        // SASS compile task config
        sass: {
            dev: {
                files: {
                    "styles/css/styles.css" : "styles/sass/styles.sass",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
