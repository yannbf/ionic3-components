#!/usr/bin/env node

// Copy Browser Code To Docs for Github Pages
// v1.0
// Automatically copies the www/ contents to /docs so that
// the repository can automatically be hosted with Github pages

var shell = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

const src= 'www';
const dist= 'docs';

shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);