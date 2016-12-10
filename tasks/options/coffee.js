/*!
 * ----------
 * XFDB®-Data
 * ----------
 * Data of XFDB — A manually curated dedicated xylella fastidiosa database.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 08-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-contrib-coffee
 * @build     : SEED™ — Örebro
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "XFDB®-Data".
 * ___________________________________________________________________________
 */

/*
 * Synopsis
 * --------
 * This Grunt Task to [Transcompiles in to JavaScript], subdivided in to the required one:
 * 1. Compile with maps files,
 * 2. Compile with maps directory and files, and
 * 3. glob to multiple files.
 */

module.exports = {
  // 1. Compile with maps files.
  compileWithMaps: {
    options: {
      sourceMap: true
    },
    files: {
      // 4:4 Compile.
      // './lib/module/*.js'      : './core/source/coffee/module/*.coffee'
      './lib/module/index.js'     : './core/source/coffee/module/index.coffee',
      './lib/module/commands.js'  : './core/source/coffee/module/commands.coffee',
      './lib/module/config.js'    : './core/source/coffee/module/config.coffee',
      './lib/module/version.js'   : './core/source/coffee/module/version.coffee'
    }
  },
  // 2. Compile with maps directory and files.
  compileWithMapsDir: {
    options: {
      sourceMap: true,
      // source map files will be created here.
      sourceMapDir: './core/source/coffee/maps/'
    },
    files: {
      // 1:1 Compile.
      // Transcompiles in to JavaScript from main.coffee ——> a CoffeeScript.
      './lib/index.js': './core/source/coffee/main.coffee',
      // 1:4 Compile and concat into single file.
      // Transcompiles in to JavaScript from module/*.coffee ——> some CoffeeScript(s).
      './lib/xfdb.compiled.js': [
        './core/source/coffee/module/index.coffee',
        './core/source/coffee/module/commands.coffee',
        './core/source/coffee/module/config.coffee',
        './core/source/coffee/module/version.coffee'
      ]
    }
  },
  // 3. glob to multiple files.
  // Compiled JavaScript for — intermediate work.
  glob_to_multiple: {
    expand: true,
    flatten: true,
    cwd: './lib/',
    src: ['*.coffee'],
    dest: './lib/out/script/',
    // output ——> ./lib/out/script/xfdb-0.0.1-2016-12-10.js
    ext: '-<%= pkg.version %>-<%= grunt.template.today("yyyy-mm-dd") %>.js'
  }
};
