const topics = ["HTML", "CSS", "Git", "JavaScript"];

// for (topic in topics) {
//   console.log(topic)
// }

//SOLUTION #1: for loop
// for (let i = 0; i < topics.length; i++) {
  //   console.log(topics[i]);
  // }

//SOLUTION #2: forEach
// topics.forEach(topic => console.log(topic));

//SOLUTION #3: map
function listTopics() {
  topics.map(topic => console.log(topic));
};

console.log("Here are the topics we learned in prework:");
listTopics();

function selectTopic(topic) {
  if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNumber = getRandomInt(topics.length);

console.log("Which topic should we study first?")
selectTopic(topics[randomNumber]);