# Middleman 4 + Gulp.js

<!--[![Build Status](https://travis-ci.org/noob2pr0/middleman-gulp.svg?branch=master)](https://travis-ci.org/noob2pr0/middleman-gulp)-->

This Middleman template implements Gulp using the new [`external_pipeline`](https://middlemanapp.com/advanced/external-pipeline/) feature introduced in v4.

Big thank you to [joshukraine](https://github.com/joshukraine/middleman-gulp.git) for the foundation of this project.

### Features

- [Gulp](http://gulpjs.com/) via [Gulp Starter](https://github.com/vigetlabs/gulp-starter) - Asset pipeline
- [BrowserSync](https://www.browsersync.io/) - Fast page reloading when changes are made in development
- [Slim](http://slim-lang.com/) - Cleaner view templates
- [SassC (LibSass)](https://github.com/sass/sassc)

### Usage

To start new Middleman site using this template, do the following:

1. Clone this repo using the https link.

        $ git clone https://github.com/noob2pr0/middleman-gulp.git my_new_site

2. Change into the project root and run the setup script.

        $ cd my_new_site
        $ bin/setup

3. Start the Middleman server. Appending `-e gulp` [sets the environment](https://middlemanapp.com/basics/upgrade-v4/#environments-and-changes-to-configure-blocks) to `gulp` and invokes the external pipeline.

        # With Gulp
        $ bundle exec middleman server -e gulp

        # Without Gulp
        $ bundle exec middleman server

4. Remove old git history and initialize a new repo.

        $ rm -rf .git
        $ git init
        $ git add --all
        $ git commit -m "Initial commit"
        $ git remote add origin https://[your-repo-url]
        $ git push -u origin master

### Acknowledgements

The following repos were very helpful in setting up this template.

- [https://github.com/joshukraine/middleman-gulp.git](https://github.com/joshukraine/middleman-gulp.git)