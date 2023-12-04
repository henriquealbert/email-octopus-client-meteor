Package.describe({
  name: "hschmaiske:email-octopus",
  version: "0.0.4",
  summary: "Email Octopus API Wrapper for Meteor",
  git: "https://github.com/henriquealbert/email-octopus-client-meteor",
  documentation: "README.md",
});

Npm.depends({
  "node-fetch": "3.3.2",
});

Package.onUse(function (api) {
  api.versionsFrom("1.12.1");
  api.use("ecmascript@0.13.0");
  api.mainModule("server-main.js", ["server"]);
});
