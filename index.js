const core = require('@actions/core');
const github = require('@actions/github');
const matcher = require('matcher');

try {
    const label = core.getInput('target');
    core.setOutput('results', label);
} catch (error) {
    core.setFailed(error.message);
}