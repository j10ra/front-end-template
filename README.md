# front-end-template
### What is this?
This is a propsed templating system which will help FEDs get started on a project to maintain best practices and standards accross the team.

The template is pre built with foundation framework - I would recomend this as it

### Structure

<pre>
.
├── app
|&nbsp;&nbsp;└── assets
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;├── fonts
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;├── images
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;├── js
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;└── scss
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── _app
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── _foundation
|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── main.scss
|&nbsp;&nbsp;├── data
|&nbsp;&nbsp;├── layouts
|&nbsp;&nbsp;├── pages
|&nbsp;&nbsp;└── partials
├── build (will be generated when running grunt)
├── Gruntfile.js
├── package.json
├── bower.json
</pre>

> Build your project in <code>app/</code> folder <br>
data/ : you can place json files here and use it in your pages for content population <br>
pages/ : this is where you build your pages <br>
partials/ : partials can be a header or footer for multiple layout styles and can also be modules <br>
layouts/ : serves as your primary layout, each of the pages located in <code>pages/</code> folder is inserted here <br>

### Dependencies
- [node.js](http://nodejs.org/) <br>
- [grunt.js](http://gruntjs.com/) <br>
- [ruby](http://rubyinstaller.org/) <br>
- [compass](http://compass-style.org/install/) <br>

><strong>Skip this if you already have them</strong>
* Download and install [node.js](http://nodejs.org/) on your machine.
* Open your terminal or command line type <code>node</code> or <code>npm</code> to check if node.js is successfully installed. <br>
<em>If not found, create the path stated in the error (this is for windows)</em>
* Using the command line, install Grunt: Type <code>npm install -g grunt-cli</code> - this will install grunt on your machine and be globally available
* Download and install [ruby](http://rubyinstaller.org/) on your machine
* Restart your terminal or command line and type in <code>gem</code> to check if ruby is successfully installed
* Install Compass via gem: Type <code>gem install compass</code>
* Your now set up!

### Running FED template
<p>If you haven't used <a href="http://gruntjs.com/">Grunt</a> before, be sure to check out the <a href="http://gruntjs.com/getting-started">Getting Started</a> guide, as it explains how to create a <a href="http://gruntjs.com/sample-gruntfile"><code>gruntfile.js</code></a> as well as install and use Grunt plugins. Once you're familiar with that process, you may run the template using the pre built grunt tasks below</p>

Go to the root directory where the template is forked or cloned <br />
* Right click on the directory and <code>Git Bash here</code> or use terminal or cmd <br />
* <code>npm install</code> to install node modules from the package.json, see package.json for dependencies<br />
* <code>bower install</code> to install packages from bower.json, see bower.json for dependencies

##### Grunt Tasks
<table>
    <tr>
        <th>Grunt</th>
        <th>Task</th>
        <th>Description</th>
    </tr>
    <tr>
        <td rowspan="6" valign="top">Default  <br> <code>$ grunt</code></td>
        <td>assemble:site</td>
        <td>Compiles handlebar files (layout, partial, pages)</td>
    </tr>
    <tr>
        <td>compass:dev</td>
        <td>Compiles scss files</td>
    </tr>
    <tr>
        <td>jshint</td>
        <td>Helps to detect errors and potential problems in js code</td>
    </tr>
    <tr>
        <td>connect:livereload</td>
        <td>Automatically reloads the page on update</td>
    </tr>
    <tr>
        <td>copy</td>
        <td>Copy files automatically</td>
    </tr>
    <tr>
        <td>watch</td>
        <td>Updates files on save</td>
    </tr>
    <tr>
        <td rowspan="7" valign="top">Build <br> <code>$ grunt build</code></td>
        <td>assemble:site</td>
        <td>Compiles handlebar files (layout, partial, pages)</td>
    </tr>
    <tr>
        <td>compass:build</td>
        <td>Compiles scss files - minified</td>
    </tr>
    <tr>
        <td>jshint</td>
        <td>Helps to detect errors and potential problems in js code</td>
    </tr>
    <tr>
        <td>uglify</td>
        <td>Concatinates, combine and minify js files</td>
    </tr>
    <tr>
        <td>copy</td>
        <td>Copy files automatically</td>
    </tr>
    <tr>
        <td>pngmin</td>
        <td>Optimize png for smaller size</td>
    </tr>
    <tr>
        <td>combine_mq</td>
        <td>Combine matching media queries into one media query definition</td>
    </tr>
</table>

Note: Update and or edit everything on the app folder - all action is in here while build folder contains all the compiled HTML and assets





