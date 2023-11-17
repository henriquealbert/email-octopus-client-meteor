Package.describe({
  name: "hschmaiske:email-octopus",
  version: "0.0.1",
  summary: "Email Octopus API Wrapper for Meteor",
  git: "https://github.com/henriquealbert/email-octopus-client-meteor",
  documentation: "README.md",
});

Npm.depends({
  "node-fetch": "3.3.2",
});

Package.onUse(function (api) {
  api.versionsFrom("2.13.3");
  api.use("ecmascript");
  api.mainModule("server-main.js", ["server"]);
});
