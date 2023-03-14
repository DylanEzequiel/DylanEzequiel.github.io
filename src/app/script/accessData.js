const { userData, jobData } = require('./data.json');

try {

  if (!userData && !jobData) {

    const data = require('./data.json');

    console.log(data.userData);
    console.log(data.jobData);
  } else {
    console.log(userData);
    console.log(jobData);
  }
} catch(e) {

  console.log(e);
}

console.log(`Nombre: ${userData.userName}; ID: ${userData.userId}`);
console.log(`Trabajo: ${jobData.jobName}; Tipo: ${jobData.jobType}`);