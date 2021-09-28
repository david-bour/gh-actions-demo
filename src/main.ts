const core = require('@actions/core');
const github = require('@actions/github');
const matcher = require('matcher');

function run() {
    const label = core.getInput('target');
    const m = matcher(label, 'release-*')
    core.setOutput('results', m);
}

run();