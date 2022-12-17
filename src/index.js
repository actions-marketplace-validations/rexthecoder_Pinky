const core = require('@actions/core');
const github = require('@actions/github');
const FormData = require('form-data');
var fs = require('fs');



/// Send file to whatsapp
async function whatsapp(form) {
  return new Promise((resolve, reject) => {

    var result = "";
    form.submit("https://api.whatsapp.com/send?phone=233544608462&text=Hi", (err, res) => {
      if (err) {
        reject(err);
      } else {
        res.on("data", (chunk) => { result += chunk; });
        res.on("end", () => {
          var data = JSON.parse(result);
          if (data.ok) {
            core.setOutput("slack_result", result);
            resolve(data);
          } else {
            core.setFailed(data.error);
            reject(data.error);
          }
        });
      }
    });
  });
}

      


// Send File to client slack channel
async function slack(form) {
  return new Promise((resolve, reject) => {

    var result = "";
    form.submit("https://slack.com/api/files.upload", (err, res) => {
      if (err) {
        reject(err);
      } else {
        res.on("data", (chunk) => { result += chunk; });
        res.on("end", () => {
          var data = JSON.parse(result);
          if (data.ok) {
            core.setOutput("slack_result", result);
            resolve(data);
          } else {
            core.setFailed(data.error);
            reject(data.error);
          }
        });
      }
    });
  });
}




async function run() {
  try {
    const token = core.getInput('token');
    const path = core.getInput('path');
    const channel = core.getInput('channel');
    const filename = core.getInput('filename');
    const filetype = core.getInput('filetype');
    const comment = core.getInput('comment');


    var form = new FormData();
    form.append('token', token);
    form.append('file', fs.createReadStream(path));
    if (filename) form.append('filename', filename);
    if (channel) form.append('channels', channel);
    if (filetype) form.append('filetype', filetype);
    if (comment) form.append('initial_comment', initial_comment);



    await whatsapp(form);


  } catch (error) {
    console.log(error);
    core.setFailed(error);
  }
}

run();