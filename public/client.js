// client-side js
// run by the browser

console.log("hello world :o");

const pgnElement = document.getElementById("pgn-data");
const menuTitle = document.getElementById("opening-title");
const openMessage = document.getElementById("OpenMessage");
const openingImage = document.getElementById("openingImage");

var daytimeCode;

const ecoPaddingRegex = /(?<beginning>.)(?<digits>\d+)/g;

//Theme Settings
let root = document.documentElement;
let greeting = "day";

// Morning Settings
// background colors; rgba(255, 201, 201, 0.8)
// primary; rgba(237, 118, 94, 0.4), rgba(227, 189, 229, 0.4)
// secondary; rgba(253, 152, 106, 0.4), rgba(255, 201, 201, 0.4)
// wallpaper bg1.jpg
//
// Day Settings
// background colors; rgba(182, 192, 197, 0.8)
// primary; rgba(24, 165, 167, 0.4), rgba(182, 192, 197, 0.4)
// secondary; rgba(157, 221, 229, 0.4), rgba(96, 134, 238, 0.4)
// wallpaper bg2.jpg
//
// Night Settings
// background colors; rgba(221, 131, 224, 0.8)
// primary; rgba(182, 126, 214, 0.4), rgba(56, 66, 76, 0.4)
// secondary; rgba(221, 131, 224, 0.4), rgba(17, 45, 96, 0.4)
// wallpaper bg3.jpg
// note; swap black and whites

function morning() {
  daytimeCode = 1
  greeting = "Good meowning";
  root.style.setProperty(
    "--wallpaper",
    'url("bg1.jpg")'
  );
  root.style.setProperty("--background", "rgba(255, 201, 201, 0.8)");
  root.style.setProperty(
    "--primary",
    "linear-gradient(to bottom right, rgba(237, 118, 94, 0.4), rgba(227, 189, 229, 0.4))"
  );
  root.style.setProperty(
    "--secondary",
    "linear-gradient(to bottom right, rgba(253, 152, 106, 0.4), rgba(255, 201, 201, 0.4))"
  );
  root.style.setProperty(
    "--secondary-solid",
    "linear-gradient(to bottom right, rgba(237, 118, 94, 1), rgba(227, 189, 229, 1))"
  );
  root.style.setProperty("--black", "#0e0c0d");
  root.style.setProperty("--white", "#F8F8FF");

  console.log(greeting);
}

function day() {
  daytimeCode = 2;
  greeting = "Good day";
  root.style.setProperty(
    "--wallpaper",
    'url("bg2.jpg")'
  );
  root.style.setProperty("--background", "rgba(182, 192, 197, 0.8)");
  root.style.setProperty(
    "--primary",
    "linear-gradient(to bottom right, rgba(24, 165, 167, 0.4), rgba(182, 192, 197, 0.4))"
  );
  root.style.setProperty(
    "--secondary",
    "linear-gradient(to bottom right, rgba(157, 221, 229, 0.4), rgba(96, 134, 238, 0.4))"
  );
  root.style.setProperty(
    "--secondary-solid",
    "linear-gradient(to bottom right, rgba(24, 165, 167, 1), rgba(182, 192, 197, 1))"
  );
  root.style.setProperty("--black", "#0e0c0d");
  root.style.setProperty("--white", "#F8F8FF");

  console.log(greeting);
}

function night() {
  daytimeCode = 3;
  greeting = "Good evening";
  root.style.setProperty(
    "--wallpaper",
    'url("bg3.jpg")'
  );
  root.style.setProperty("--background", "rgba(221, 131, 224, 0.8)");
  root.style.setProperty(
    "--primary",
    "linear-gradient(to bottom right, rgba(182, 126, 214, 0.4), rgba(56, 66, 76, 0.4))"
  );
  root.style.setProperty(
    "--secondary",
    "linear-gradient(to bottom right, rgba(221, 131, 224, 0.4), rgba(17, 45, 96, 0.4))"
  );
  root.style.setProperty(
    "--secondary-solid",
    "linear-gradient(to bottom right, rgba(182, 126, 214, 1), rgba(56, 66, 76, 1))"
  );
  root.style.setProperty("--white", "#0e0c0d");
  root.style.setProperty("--black", "#F8F8FF");

  console.log(greeting);
}

function theme() {
  let today = new Date();
  let hour = today.getHours();

  if (hour > 6 && hour < 12) {
    morning();
    
  } else if (hour < 20) {
    day();
    
  } else {
    night();
    
  }
}

function graphs() {
  const ctx = document.getElementById('HNgraph').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bullet', 'Blitz', 'Rapid', 'FIDE'],
            datasets: [{
                label: 'ELO Rating',
                data: [3414, 3265, 2740, 2814],
                backgroundColor: [
                    'rgba(245, 232, 199, 0.8)',
                    'rgba(222, 186, 157, 0.8)',
                    'rgba(158, 119, 119, 0.8)',
                    'rgba(111, 76, 91, 0.8)'
                ],
                borderColor: [
                    'rgba(205, 194, 186, 1)',
                    'rgba(222, 186, 157, 1)',
                    'rgba(158, 119, 119, 1)',
                    'rgba(111, 76, 91, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('MCgraph').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Bullet', 'Blitz', 'Rapid', 'FIDE'],
            datasets: [{
                label: 'ELO Rating',
                data: [3260, 3123, 2810, 2814],
                backgroundColor: [
                    'rgba(245, 232, 199, 0.8)',
                    'rgba(222, 186, 157, 0.8)',
                    'rgba(158, 119, 119, 0.8)',
                    'rgba(111, 76, 91, 0.8)'
                ],
                borderColor: [
                    'rgba(205, 194, 186, 1)',
                    'rgba(222, 186, 157, 1)',
                    'rgba(158, 119, 119, 1)',
                    'rgba(111, 76, 91, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('ARgraph').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Bullet', 'Blitz', 'Rapid', 'FIDE'],
            datasets: [{
                label: 'ELO Rating',
                data: [2036, 2005, 2195, 2325],
                backgroundColor: [
                    'rgba(245, 232, 199, 0.8)',
                    'rgba(222, 186, 157, 0.8)',
                    'rgba(158, 119, 119, 0.8)',
                    'rgba(111, 76, 91, 0.8)'
                ],
                borderColor: [
                    'rgba(205, 194, 186, 1)',
                    'rgba(222, 186, 157, 1)',
                    'rgba(158, 119, 119, 1)',
                    'rgba(111, 76, 91, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx4 = document.getElementById('LRgraph').getContext('2d');
    const myChart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Bullet', 'Blitz', 'Rapid', 'FIDE'],
            datasets: [{
                label: 'ELO Rating',
                data: [2744, 2665, 2428, 2337],
                backgroundColor: [
                    'rgba(245, 232, 199, 0.8)',
                    'rgba(222, 186, 157, 0.8)',
                    'rgba(158, 119, 119, 0.8)',
                    'rgba(111, 76, 91, 0.8)'
                ],
                borderColor: [
                    'rgba(205, 194, 186, 1)',
                    'rgba(222, 186, 157, 1)',
                    'rgba(158, 119, 119, 1)',
                    'rgba(111, 76, 91, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function openSubmit(e) {
  e.preventDefault();
  const userInput1 = choiceForm.elements["opening-name"]; //gets data from input1 (see index.html, line 12) used to input data to database
  const userInput2 = choiceForm.elements["ECO-code"]; // gets data from input2 (see index.html, line 15) used to input data to database

  let name = document.getElementById("opening-name").value;
  console.log(name);
  let ECO = document.getElementById("ECO-code").value;
  console.log(ECO);

  let err;
  if (name != "" && ECO != "") {
    err = "Please only fill in one section of the form";
  } else if (name == "" && ECO == "") {
    err = "Form must not be empty";
  } else {
    if (name != "") {
      err = "Searching names for " + name;
      getPGNfName(name);
    } else if (ECO != "") {
      err = "Searching ECOs for " + ECO;
      getPGNfECO(ECO);
    } else {
      err = "Unknown Error";
    }
  }
  console.log(err)
  openMessage.innerHTML = err;
}
 
const dreams = [];
// const dreamsList = document.getElementById("dreams");

// function getPGNfName(name) {
//   //function where we will get data from server.js
//   // request the dreams from our app's sqlite database
//   fetch(`/getPGNfromName?name=${name}`, {})
//   .then(res => res.json())
//   .then(response => {
//     response.forEach(row => {
//       appendNewDream(row.Name);
//     });
//   });
// }

async function getPGNfName(name) {
  //function where we will get data from server.js
  // request the dreams from our app's sqlite database
  let nameUriEncoded = encodeURIComponent(name);
  let res = await fetch(`/getPGNfromName?name=${nameUriEncoded}`, {});
  let message = checkResponseStatus(res.status);
  console.log(message);
  openMessage.innerText = message;
  if (res.status == 200) {
    let response = await res.json();
    console.log(response);
    setOpeningTitle(response.Code, response.Name);
    setPGNData(response.PGN);
  }
}

async function getPGNfECO(ECO) {
  //function where we will get data from server.js
  // request the dreams from our app's sqlite database
  let res = await fetch(`/getPGNfromECO?ECO=${ECO}`, {});
  
  let message = checkResponseStatus(res.status);
  openMessage.innerText = message;
  if (res.status == 200) {
    let response = await res.json();
    console.log(response);
    setOpeningTitle(response.Code, response.Name);
    setPGNData(response.PGN);
    updateGif(response.Code);
  }
}


const checkResponseStatus = (status) => {
  switch (status) {
    case 200:
      return "Done"
      break
    case 404:
      return "Not Found"
      break
    default:
      return `Server returned ${status} :(`
  }
}


const updateGif = (ecoCode) => {
  let result = ecoPaddingRegex.exec(ecoCode);
  let padded = ecoCode.replaceAll(ecoPaddingRegex, `$<beginning>$<digits>${daytimeCode}`);
  let gif_src = `gifs/opening${padded}.gif`;
  console.log(gif_src);
  openingImage.src = gif_src;
}

const setOpeningTitle = (ecoCode, name) => {
  menuTitle.innerHTML = `<strong>${ecoCode}</strong> ${name}`;
}
//const pgnRegex = /\s(\b\d+)/g;

const setPGNData = pgnData => {
  // let resultPGNData = pgnData.replaceAll(pgnRegex, '\n$1');
  // console.log(resultPGNData);
  pgnElement.innerText = pgnData;
}

// // a helper function that creates a list item for a given dream
// const appendNewDream = dream => {
//   const newListItem = document.createElement("li");
//   newListItem.innerText = dream;
//   dreamsList.appendChild(newListItem);
// };

// console.log(dreams)
// console.log(dreamsList)

function ProcessData() {
  let dbresults; //creating variable to store results
  const resultsList = document.getElementById("results"); //used to display text/data to the user

  console.log("ProcessData"); //prints to console to test if function is working (press f12)
  dbresults = JSON.parse(this.responseText); //don't change(if you get error for this line means getData() isn't getting data from /getAllData in server.js)
  console.log(dbresults)
  dbresults.forEach(function(row) {
    //for loop for all rows in database
    let newListItem = document.createElement("li"); //creates list item to be added to the results list
    newListItem.innerText =
      row["column1"].toString() + ", " + row["column2"].toString(); //change anything after the = to change what is displayed to the user
    //currently diplays values for each column in a row that is defined in SetUpDatabase.txt
    resultsList.appendChild(newListItem); //adds newListItem to results list to be displayed to the user
  });
}
const choiceForm = document.forms["openForm"]; //gets forms (check your html file for a form tag and enter the form name)
choiceForm.addEventListener('submit', openSubmit);