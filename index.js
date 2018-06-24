#!/usr/bin/env node 

//Import commander, execa and listr modules
const commander = require('commander');



function triggerGitPush(message){
    const execa = require('execa');
    const listr = require('listr');
    new listr([
        {
            title: "Adding changes to git",
            task: () => execa('git', ['add', '.'])
        },
        {
            title: "Commit changes to repo",
            task: (ctx, task) => execa('git', ['commit', '-m', message]).catch(() => task.skip())
        },
        {
            title: "Push to remote repo",
            task: (ctx, task) => execa('git', ['push', 'origin', 'master']).catch(() => task.skip())
        }
     ]).run();
}

//Init commander with name and version
commander
    .version('0.1.0')
    .description('Git made easy');


commander
    .command('regularsync')
    .alias('r')
    .description("Pushes to remote 'origin' repo with commit message as 'Regular Sync'")
    .action(() => triggerGitPush('Regular Sync'));

commander
    .command('syncwithmessage <msg>')
    .alias('m')
    .description("Pushes to remote 'origin' repo and takes in a argument 'message' to commit to the repo")
    .action(msg => triggerGitPush(msg));

commander.parse(process.argv);