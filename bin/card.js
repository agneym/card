#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  align: "center",
  float: "center",
  borderColor: "#FF729F",
  dimBorder: true,
}

const details = {
  name: "Agney Menon",
  handle: "Boy with Silver Wings",
  work: "Javascript Developer @ Dexlock",
  twitter: "https://twitter.com/agneymenon",
  github: "https://github.com/boywithsilverwings",
  linkedin: "https://linkedin.com/in/agneymenon",
  web: "https://boywithsilverwings.github.io",
  npx: "npx boywithsilverwings",
}

const output = chalk`
  ${details.name} {cyanBright ${details.handle}}

  {bold Work}:  {cyanBright ${details.work}}
  {bold Twitter}:  {cyanBright ${details.twitter}}
  {bold Github}:  {cyanBright ${details.github}}
  {bold Linkedin}:  {cyanBright ${details.linkedin}}
  {bold Web}:  {cyanBright ${details.web}}
  {bold npx}:  {cyanBright ${details.npx}}
`;

console.log(boxen(output, options));
