
console.log("Hi everyone");
document.write("<h2>Whatsup!</h2>");


const firstPhrase = ["Knock knock, who's there ", "What happened when the ", "Have you met ", "If I could sleep with a "];
const secondPhrase = ["Bear ", "Flamingo ", "Vache ", "Doggy ", "Turtle "];
const thirdPhrase = ["bare back attack.", "crossed the road and got smacked.", "the degen animal.", "ate my ass and I probably cum thrice.", "I'd last 15 min with Bill Belichick."];


console.log(firstPhrase[1]);

let i = Math.floor((Math.random())*3);
let j = Math.floor((Math.random())*4);
let k = Math.floor((Math.random())*4);
console.log(i);

document.write(firstPhrase[i]+secondPhrase[j]+thirdPhrase[k]);