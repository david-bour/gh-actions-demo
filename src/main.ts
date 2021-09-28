const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const nameToGreet = core.getInput('who-to-greet');
    const time = (new Date()).toDateString();
    const payload = JSON.stringify(github.context.payload, undefined, 2);
}

run().catch(error => core.setFailed('Workflow failed ' + error.message));

