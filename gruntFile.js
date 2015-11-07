module.exports = function (grunt) {
  grunt.initConfig({
    pngmin: {
      compile: {
        options: {
          concurrency: 8,             // specify how many exucutables get spawned in parallel
          colors: 128,                // reduce colors to 128
          ext: '.png',                // use .png as extension for the optimized files
          quality: '50',           // output quality should be between 65 and 80 like jpeg quality
          speed: 2,                  // pngquant should be as fast as possible
          iebug: true                 // optimize image for use in Internet Explorer 6
        },
        files: [
          {
            src: 'image/*.png',
            dest: 'image/medium/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-pngmin');
};
