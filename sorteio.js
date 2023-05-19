function countdown(dateString, element) {
  let countDownDate = new Date(dateString).getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    element.innerHTML = '<div class="time"><span id="dia">' + days + '</span><span class="time-txt" style="color: #97CB42">DIAS</span></div>' +
                        '<div class="time"><span id="hora">' + hours + '</span><span class="time-txt">HRS</span></div>' +
                        '<div class="ponto">:</div>' +
                        '<div class="time"><span id="minuto">' + minutes + '</span><span class="time-txt">MIN</span></div>' +
                        '<div class="ponto">:</div>' +
                        '<div class="time"><span id="segundo">' + seconds + '</span><span class="time-txt">SEG</span></div>';
    if (distance < 0) {
      clearInterval(x);
      element.innerHTML = "A live começou!";
    }
  }, 1000);
}





let countDownDate = "2023-05-06T18:30:00Z"; // Data da live em formato de string
let countDownElement = document.querySelector(".time-div"); // Elemento HTML que exibirá a contagem regressiva
countdown(countDownDate, countDownElement);


let hamburger = document.querySelector('#hamburger')
let nav = document.querySelector('#nav')

let hidden = true;
hamburger.addEventListener("click", ()=>{
    if(hidden === true) {
        nav.style.transform = 'translateX(0%)';
        hidden = false;
    }else{
        nav.style.transform = 'translateX(100%)';
        hidden = true;
    }
})


let btnSorte = document.querySelector("#btn1");

/* let sorteDiv1 = document.querySelector("#ganha1");
let sorteDiv2 = document.querySelector("#ganha2");
let sorteDiv3 = document.querySelector("#ganha3");
let sorteLoad = document.querySelector(".sorteLoad");
btnSorte.addEventListener("click", ()=>{
    mostra()
})


function mostra() {
  const sheetId = `1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE`;
  const apiKey = `AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM`;
  sorteLoad.style.display = "block";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:C?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const values = data.values;
      for (let i = 1; i < values.length; i++) {
        const nome = values[i][0];
        const email = values[i][1];

        console.log(`Nome: ${nome}, Email: ${email}`);
      }

      // Chama a função desejada depois que os dados forem processados com sucesso
      fechaTela();
    })
    .catch(error => {
      console.error(error);
    });
}

function fechaTela() {
  console.log("Esta é a minha outra função.");
  sorteLoad.style.display = "none";
}
 */
 
 
 let sorteDiv1 = document.querySelector("#ganha1");
let sorteDiv2 = document.querySelector("#ganha2");
let sorteDiv3 = document.querySelector("#ganha3");
let sorteLoad = document.querySelector(".sorteLoad");
btnSorte.addEventListener("click", () => {
  mostra();
});

function sortearEmails(values) {
  const emails = [];
  while (emails.length < 3) {
    const email = values[Math.floor(Math.random() * (values.length - 1)) + 1][1];
    if (!emails.includes(email)) {
      emails.push(email);
    }
  }
  
  return emails;
  
}

function indexnome(email,values) {
    let emails = [];
      for (let i = 1; i < values.length; i++) { 
        const email = values[i][1];
        emails.push(email);
      }
      
      let indexnome1 = emails.lastIndexOf(email) + 1;
      const nome = values[indexnome1][0];
      return nome;
}


function mostra() {
  const sheetId = `1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE`;
  const apiKey = `AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM`;
  sorteLoad.style.display = "block";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:C?key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const values = data.values;
      //const nome = values[1][0];
      const [email1, email2, email3] = sortearEmails(values);
    let nome1 = indexnome(email1, values);
    let nome2 = indexnome(email2, values);
    let nome3 = indexnome(email3, values)
      const contagem = values.reduce((acc, curr) => {
        const email = curr[1];
        acc[email] = (acc[email] || 0) + 1;
        return acc;
      }, {});
      const qtdEmail1 = contagem[email1] || 0;
      const qtdEmail2 = contagem[email2] || 0;
      const qtdEmail3 = contagem[email3] || 0;
      
     let  text1 = `Nome: ${nome1}<br>Email: ${email1}<br> Presença: ${qtdEmail1}`;
     let text2 = `Nome: ${nome2}<br>Email: ${email2}<br> Presença: ${qtdEmail2}`;
      let text3 = `Nome: ${nome3}<br>Email: ${email3}<br> Presença: ${qtdEmail3}`;
      
      if (qtdEmail1 >= qtdEmail2 && qtdEmail1 >= qtdEmail3) {
        sorteDiv1.innerHTML = text1;
        if (qtdEmail2 >= qtdEmail3) {
          sorteDiv2.innerHTML = text2;
          sorteDiv3.innerHTML = text3;
        } else {
          sorteDiv2.innerHTML = text3;
          sorteDiv3.innerHTML = text2;
        }
      } else if (qtdEmail2 >= qtdEmail1 && qtdEmail2 >= qtdEmail3) {
        sorteDiv1.innerHTML = text2;
        if (qtdEmail1 >= qtdEmail3) {
          sorteDiv2.innerHTML = text1;
          sorteDiv3.innerHTML = text3;
        } else {
          sorteDiv2.innerHTML = text3;
          sorteDiv3.innerHTML = text1;
        }
      } else {
        sorteDiv1.innerHTML = text3;
        if (qtdEmail1 >= qtdEmail2) {
          sorteDiv2.innerHTML = text1;
          sorteDiv3.innerHTML = text2;
        } else {
          sorteDiv2.innerHTML = text2;
          sorteDiv3.innerHTML = text1;
        }
      }
      fechaTela();
    })
    .catch((error) => {
      console.error(error);
      fechaTela();
    });
}

function fechaTela() {
  sorteLoad.style.display = "none";
}
