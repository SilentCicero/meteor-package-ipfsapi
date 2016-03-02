/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:ipfs-api',
  version: '0.0.8-1',
  summary: 'A client library for the IPFS HTTP API, implemented in JavaScript.',
  git: 'https://github.com/SilentCicero/meteor-package-ipfsapi',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  
  Npm.depends({
    'ipfs-api': '0.0.8',
  });

  api.export(['ipfsAPI'], ['client','server']);

  api.addFiles('package-init.js', 'client');
  api.addFiles('package-init.js', 'server');
});
