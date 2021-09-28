"use strict";
const core = require('@actions/core');
const github = require('@actions/github');
const matcher = require('matcher');
function run() {
    const label = core.getInput('target');
    core.setOutput('results', label);
}
run();
