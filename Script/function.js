const validemail = document.getElementById ("userEmail");
const validpassword = document.getElementById("userPassword");
const logInPage = document.querySelector(".mainPage");
const welcomName = document.querySelector(".welcome");
const amount = document.querySelector(".initial__blance");
const reqloan = document.getElementById("reqamt");
const moneyTransferAcc = document.querySelector(".inputValiedEmail");
const tranferMoney = document.querySelector(".inputTransferAmount");
let appendParent = document.querySelector(".transactionHistory");
const historyDiv = document.querySelector(".withdraw");

let user1 = {
  email: "user@gmail.com",
  password: 1,
  movements: [],
};
let user2 = {
  email: "user1@gmail.com",
  password: 1,
  movements: [],
};
let user3 = {
  email: "user2@gmail.com",
  password: 1,
  movements: [],
};

let userDetailes = [user1, user2, user3];

// <<<  Entery check  & welcome note   block  >>>

function authentication() {
  for (let index = 0; index < userDetailes.length; index++) {
    if (
      userDetailes[index].email == validemail.value &&
      userDetailes[index].password == validpassword.value
    ) 
    {
      logInPage.style.opacity = 1;
      historyDiv.style.opacity = 0;

      if (userDetailes[index].email == "user@gmail.com") {
        amount.innerHTML = "3000$";
        welcomName.innerHTML = "Welcome back, user  ";
      } else if (userDetailes[index].email == "user1@gmail.com") {
        amount.innerHTML = "4000$";
        welcomName.innerHTML = "Welcome back, user 1";
      } else {
        amount.innerHTML = "5000$";
        welcomName.innerHTML = "Welcome back, user 2";
      }

      return;
    }
  }
  alert("Invalid detailes");
}

// <<<Request Loan Block  >>>

function reqLoanProscess() {
  let reqLoanAmt = parseFloat(reqloan.value);
  let initial__blance = parseFloat(amount.textContent);

  let totalValue = reqLoanAmt + initial__blance;

  amount.innerHTML = totalValue + "$";

  //show History div's

  let wholeDiv = document.createElement("div");
  let loanType = document.createElement("h4");
  let loanDate = document.createElement("h4");
  let loanAmount = document.createElement("h2");

  wholeDiv.className = "loanDiv";

  loanType.className = "loanPara";
  loanDate.className = "withdrawDate";
  loanAmount.className = "withdrawalValue";

  wholeDiv.appendChild(loanType);
  wholeDiv.appendChild(loanDate);
  wholeDiv.appendChild(loanAmount);

  loanType.innerHTML = "Deposit";
  loanDate.innerHTML = new Date().toLocaleDateString();
  loanAmount.innerHTML = "+" + reqloan.value + "$";

  appendParent.appendChild(wholeDiv);
}

// <<< Transfer Money >>>

function moneyTransfer() {
  if (moneyTransferAcc.value === validemail.value && userDetailes[index].email===value) {
    alert("Check Your Email");
    return;
  }

  for (let index = 0; index < userDetailes.length; index++) {
    if (userDetailes[index].email == moneyTransferAcc.value) {
      let transValue = parseFloat(tranferMoney.value);
      let currentBl = parseFloat(amount.textContent);

      let afterTransfer = currentBl - transValue;

      amount.innerHTML = afterTransfer + "$";

      userDetailes[index].movements.push(tranferMoney.value);

      localStorage.setItem("movements", userDetailes[index].movements);
      let stroage = localStorage.getItem("movements",userDetailes[index].movements);

      //  <<<< CREATE DIV(View History) >>>>

      let wholeDiv = document.createElement("div");
      let withdrawType = document.createElement("h4");
      let withDrawDate = document.createElement("h4");
      let minesAmount = document.createElement("h2");
      let sendTo = document.createElement("h4");

      // <<<<Add a (CSS) to the create Div Block >>>>

      wholeDiv.className = "withdraw";

      withdrawType.className = "withdrawPara";
      withDrawDate.className = "withdrawDate";
      minesAmount.className = "withdrawalValue";
      sendTo.className = "withdrawDate";

      // <<<<Append The chiledDiv to  parentDiv  Block  >>>>

      wholeDiv.appendChild(withdrawType);
      wholeDiv.appendChild(withDrawDate);
      wholeDiv.appendChild(minesAmount);
      wholeDiv.appendChild(sendTo);

      // <<<< Assign a (value) to the Opening Div's Block  >>>>

      minesAmount.innerHTML = "-" + tranferMoney.value + "$";
      withdrawType.innerHTML = "transfer";
      withDrawDate.innerHTML = new Date().toLocaleDateString();
      sendTo.innerHTML = "To =>>" + moneyTransferAcc.value;

      appendParent.appendChild(wholeDiv); //Must the child is append to the Whole Div in the HTML....

      return;
    }
  }
}
