const container = document.querySelector(".quiz-container");
const labels = document.querySelectorAll("label");
const radios = document.querySelectorAll("input[type=radio]");
const submitBtn = document.querySelector("button");
let finalMessage = document.querySelector(".final-msg h1");
let questionHeader = document.querySelector("h2");
let labelA = labels[0];
let labelB = labels[1];
let labelC = labels[2];
let labelD = labels[3];
let currentScore = 0;
let arrIndex = 0;

class Question {
  constructor(quest, a, b, c, d, rightAnswer) {
    this.quest = quest;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.rightAnswer = rightAnswer;
  }

  get RightAnswer() {
    return this.rightAnswer;
  }

  loadQuest() {
    questionHeader.innerHTML = this.quest;
    labelA.innerHTML = this.a;
    labelB.innerHTML = this.b;
    labelC.innerHTML = this.c;
    labelD.innerHTML = this.d;
  }
}

const quest1 = new Question("İdeal boy-kilo endeksi puanı kaçtır ?","18","18-25","25-30","30++","b");
const quest2 = new Question( "Aşağıdakilerden hangisi en çekirdek erkek özelliğidir ?","Disiplin","Öfke","Güç","Ağlamak","a");
const quest3 = new Question("Pi sayısının ilk 3 rakamı kaçtır ?",3.0,5.24,6.53,3.14,"d");
const quest4 = new Question("Mike Tyson'ın lakabı nedir ?","Iron Mike","Killer Puncher","Demir Kroşe","Kral Yumruk","a");
const quest5 = new Question("AKP kaç yıldır iktidar ?", 10, 15, 8, 20, "d");

let questsArr = [quest1, quest2, quest3, quest4, quest5];

questsArr[arrIndex].loadQuest();

submitBtn.addEventListener("click", () => {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const checkedValue = radios[i].value;
      if (arrIndex < questsArr.length  ) {
        if (checkedValue == questsArr[arrIndex].RightAnswer) {
          currentScore++;
          arrIndex++;
          questsArr[arrIndex].loadQuest();
        } else {
          arrIndex++;
          questsArr[arrIndex].loadQuest();
        }
      } else {
        container.classList.toggle("hide");
        document.querySelector(".final-msg").classList.toggle("hide");
        finalMessage.innerHTML = "Test Bitti. Doğru cevap sayınız " + currentScore + "/5 .";
      }
    }
  }
});
