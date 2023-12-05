//Array med objekt
const fizzyDrinks = [
  {
    name: "Coca-Cola",
    question: "Coca-Cola contains caffeine.",
    answer: true,
  },
  {
    name: "Pepsi",
    question: "Pepsi's original name was 'Brad's Drink'.",
    answer: true,
  },
  {
    name: "Sprite",
    question: "Sprite is a lemon-lime soda.",
    answer: true,
  },
  {
    name: "Fanta",
    question: "Fanta comes in flavors like orange and grape.",
    answer: true,
  },
  {
    name: "Mountain Dew",
    question: "Mountain Dew is a type of energy drink.",
    answer: false,
  },
  {
    name: "Dr. Pepper",
    question: "Dr. Pepper contains prune juice.",
    answer: true,
  },
  {
    name: "Root Beer",
    question: "Root Beer is a type of ginger ale.",
    answer: false,
  },
  {
    name: "Ginger Ale",
    question: "Ginger Ale is known for its calming effect on the stomach.",
    answer: true,
  },
  {
    name: "Club Soda",
    question: "Club Soda is a flavored soda.",
    answer: false,
  },
  {
    name: "Tonic Water",
    question: "Tonic Water is often used as a mixer in cocktails.",
    answer: true,
  },
  {
    name: "Sparkling Water",
    question: "Sparkling Water is carbonated.",
    answer: true,
  },
  {
    name: "Seltzer",
    question: "Seltzer is a type of cola.",
    answer: false,
  },
];
console.log(fizzyDrinks[3]);

//Variablar

let quizCards = document.querySelector(".cardWrap");

//Knappar

document.querySelector("#startQuizBtn").addEventListener("click", () => {
  let randomQuestion = getRandomQuestion();
  constructQuizCard(randomQuestion);
});
//Funktioner

const constructQuizCard = (questions) => {
  let quizDiv = document.createElement("div");
  quizDiv.classList.add("quizCard");
  quizDiv.innerText = `
    Name: ${questions.name}
    Question: ${questions.question}
    `;
  quizCards.innerHTML = "";
  quizCards.append(quizDiv);
};

const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * fizzyDrinks.length);
  return fizzyDrinks[randomIndex];
};

//Filtering

//Rendering

//Poängställning

//Exempel
// {
//     name: "Seltzer",
//     question: "Seltzer is a type of cola.",
//     answer: false,
// },

// Museffekt
let mousePos = document.documentElement;
mousePos.addEventListener("mousemove", (e) => {
  mousePos.style.setProperty("--x", e.clientX + "px");
  mousePos.style.setProperty("--y", e.clientY + "px");
});

//Shuffle funktion
// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }
