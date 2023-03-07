console.log(`Node.js version: ${process.version}`);
console.log(`Current directory: ${process.cwd()}`);
process.on('exit', code => {
  console.log(`Exiting with code ${code}`);
});
process.on('uncaughtException', error => {
  console.error(`Uncaught exception: ${error.message}`);
  process.exit(1);
});
