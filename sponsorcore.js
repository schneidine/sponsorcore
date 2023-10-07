
// Array to hold our questions and their corresponding answer choices.
const qnas = [
    
    { question: " What do you like?",
      a: "ANSWER",
      b: "ANSWER",
      c: "ANSWER",
      d: "ANSWER", 
      e: "ANSWER",
      f: "ANSWER",
      g: "ANSWER"
    },

    { question: " QUESTION 2",
    a: "ANSWER",
    b: "ANSWER",
    c: "ANSWER",
    d: "ANSWER",       
    e: "ANSWER",
    f: "ANSWER",
    g: "ANSWER"
  },

  { question: " QUESTION 3",
  a: "ANSWER",
  b: "ANSWER",
  c: "ANSWER",
  d: "ANSWER", 
  e: "ANSWER",
  f: "ANSWER",
  g: "ANSWER"
  },

  { question: " QUESTION 4",
  a: "ANSWER",
  b: "ANSWER",
  c: "ANSWER",
  d: "ANSWER", 
  e: "ANSWER",
  f: "ANSWER",
  g: "ANSWER"
  },

  { question: " QUESTION 5",
  a: "ANSWER",
  b: "ANSWER",
  c: "ANSWER",
  d: "ANSWER", 
  e: "ANSWER",
  f: "ANSWER",
  g: "ANSWER"
  },

  { question: " QUESTION 6",
  a: "ANSWER",
  b: "ANSWER",
  c: "ANSWER",
  d: "ANSWER", 
  e: "ANSWER",
  f: "ANSWER",
  g: "ANSWER"
},

{ question: " QUESTION 7",
a: "ANSWER",
b: "ANSWER",
c: "ANSWER",
d: "ANSWER", 
e: "ANSWER",
f: "ANSWER",
g: "ANSWER"
},

{ question: " QUESTION 8",
a: "ANSWER",
b: "ANSWER",
c: "ANSWER",
d: "ANSWER", 
e: "ANSWER",
f: "ANSWER",
g: "ANSWER"
},

{ question: " QUESTION 9",
a: "ANSWER",
b: "ANSWER",
c: "ANSWER",
d: "ANSWER",
e: "ANSWER",
f: "ANSWER",
g: "ANSWER" 
},

{ question: " QUESTION 10",
a: "ANSWER",
b: "ANSWER",
c: "ANSWER",
d: "ANSWER", 
e: "ANSWER",
f: "ANSWER",
g: "ANSWER"
},
];

// Array to hold answer choice point values, initalized to [0,0,0,0]
const pointValues = Array(4).fill(0);

const answerIds = ["a", "b", "c", "d", "e", "f", "g"];

// test - does it print ?
console.log("Question:", qnas[0].question);

document.addEventListener("DOMContentLoaded", function () {
  // get all our html elements
  const question = document.getElementById("question");

  for (const i of qnas){
    question.innerText = qnas[i].question;
  }

  for (const id of answerIds) {
    elements[id] = document.getElementById(id);
  }



  //const answer =  document.getElementById("answer");




});




