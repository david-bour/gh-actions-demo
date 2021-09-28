const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toDateString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
}

run().catch(error => core.setFailed('Workflow failed ' + error.message));

