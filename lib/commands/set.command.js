const program = require('commander');
const {setVersion} = require('../actions/set.action');

program
    .command('version:set')
    .description('Update package.json file')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .option('-h, --help', 'Display set help')
    .action((options) => setVersion(options));
