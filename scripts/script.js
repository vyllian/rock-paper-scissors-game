// -----------------------score------------------------------
const defineScore = (givenScore) => {
  const score = document.querySelector(".score-num");
  if (givenScore) {
    score.textContent = givenScore >= 10 ? givenScore : "0" + givenScore;
    return;
  }
  const params = new URLSearchParams(document.location.search);
  let num;
  if (params.has("score")) {
    num = Number(params.get("score"));
    score.textContent = num >= 10 ? num : "0" + num;
  } else {
    num = 0;
    score.textContent = "00";
  }
};
defineScore();

// ------------------------rules------------------------
const rulesBtn = document.querySelector(".rules-btn");

rulesBtn.addEventListener("click", () => {
  document.body.appendChild(createRulesArticle());
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", () => {
    const article = document.querySelector("article");
    document.body.removeChild(article);
  });
});

const createRulesArticle = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Rules";
  h2.classList.add("bold");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "close-btn";

  const closeImg = document.createElement("img");
  closeImg.src = "./images/icon-close.svg";
  closeImg.alt = "close";
  closeImg.width = "20";
  btn.appendChild(closeImg);

  const innerDiv = document.createElement("div");
  if (window.innerWidth <= 545) {
    innerDiv.appendChild(h2);
    innerDiv.style='justify-content: center;'
  } else {
    innerDiv.append(h2, btn);
  }
  innerDiv.classList.add("flex");

  const rulesImg = document.createElement("img");
  rulesImg.src = "./images/image-rules.svg";
  rulesImg.alt =
    "Rules: paper beats rock, rock beats scissors, scissors beat paper";
  rulesImg.width = "305";
  

  const outerDiv = document.createElement("div");
  if (window.innerWidth <= 545) {
    outerDiv.append(innerDiv, rulesImg, btn);
  } else {
    outerDiv.append(innerDiv, rulesImg);
  }
  outerDiv.classList.add("rules", "flex");
  

  const article = document.createElement("article");
  article.appendChild(outerDiv);
  article.classList.add("backdrop");
 
  return article;
};
