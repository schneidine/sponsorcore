
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

// Array for answers
const answerIds = ["a", "b", "c", "d", "e", "f", "g"];
const elements= [];

// test - does it print ?
console.log("Question:", qnas[0].question);

// Initialize index to keep track of the current string
const stringDisplay = document.getElementById("questions");
const nextButton = document.getElementById("next");
let currentIndex = 0;

// Function to display the current string
function displayCurrentString() {
  if (currentIndex < qnas.length) {
    stringDisplay.textContent = qnas[currentIndex].question;
  } else {
    stringDisplay.textContent = "End of strings.";
  }
}

// Initial display of the first string
//displayCurrentString();

// Add a click event listener to the "Next" button
nextButton.addEventListener("click", () => {
  currentIndex++; // Move to the next string in the array
  displayCurrentString(); // Update the displayed string
});
