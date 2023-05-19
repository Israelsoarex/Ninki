/* function countdown(dateString, element) {
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
countdown(countDownDate, countDownElement); */

function countdown(element) {
  let now = new Date().getTime();
  let nextTuesday = new Date();
  nextTuesday.setHours(21, 0, 0, 0);
  nextTuesday.setDate(nextTuesday.getDate() + (2 - nextTuesday.getDay() + 7) % 7);
  if (nextTuesday.getTime() < now) {
    nextTuesday.setDate(nextTuesday.getDate() + 7);
  }
  let countDownDate = nextTuesday.getTime();
  let x = setInterval(function() {
  now = new Date().getTime();
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
 if(distance == 0) {
    element.innerHTML = '<div class="time"><span id="dia">' + 0 + '</span><span class="time-txt" style="color: #97CB42">DIAS</span></div>' +
                      '<div class="time"><span id="hora">' + 0 + '</span><span class="time-txt">HRS</span></div>' +
                      '<div class="ponto">:</div>' +
                      '<div class="time"><span id="minuto">' + 0 + '</span><span class="time-txt">MIN</span></div>' +
                      '<div class="ponto">:</div>' +
                      '<div class="time"><span id="segundo">' + 0 + '</span><span class="time-txt">SEG</span></div>';
   }
  if (distance <= 0) {
    clearInterval(x);
    // reinicia a contagem
    countdown(element);
  }
}, 1000);

}

let countDownElement = document.querySelector(".time-div"); // Elemento HTML que exibirá a contagem regressiva
countdown(countDownElement);


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


let shurikenLoad = document.querySelector(".shurikenLoad");
let ninjaRight = document.querySelector(".envioScreen1");
let ninjaWrong = document.querySelector(".envioScreen2");

function handleform(event) {
   event.preventDefault();
   shurikenLoad.style.display = "block";
   let nome = document.querySelector('#nome').value; 
let email = document.querySelector('#email').value;
let data = new Date().toISOString(); // obtém a data atual e converte para o formato ISO
verificaEnvio(email)

   /* fetch('https://api.sheetmonkey.io/form/8xfAKzU7vVy3gvbHwnPf3F',{
        method:'post',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({nome, email,data})
    }).then(mostra())
    */
    
}

function redirecionar() {
  window.location.href = "https://cursoninki.com.br/";
}


function enviar() {
  let nome = document.querySelector('#nome').value; 
let email = document.querySelector('#email').value;
let data = new Date().toISOString(); // obtém a data atual e converte para o formato ISO
  
    fetch('https://api.sheetmonkey.io/form/8xfAKzU7vVy3gvbHwnPf3F',{
        method:'post',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({nome, email,data})
    }).then(envioCerto())
   
} 

function envioCerto(){
    shurikenLoad.style.display = "none";
      ninjaRight.style.display = "block"
      setTimeout(()=>{
          ninjaRight.style.display = "none";
          limparInputs()
      }, 3000)
      redirecionar()
}


document.querySelector('form').addEventListener("submit", handleform)


function verificaEnvio(email) {
    const sheetId = `1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE`;
    const apiKey = `AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM`;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:C?key=${apiKey}`;
  
  fetch(url).then(response => response.json()).then(data =>{
      const values = data.values;
      let emails = [];
      for (let i = 1; i < values.length; i++) { 
        const email = values[i][1];
        emails.push(email);
      }
      
      
      let indexdata = emails.lastIndexOf(email) + 1;
      
      if(indexdata === 0) {
          //alert('email nunca enviado')
          enviar();
      }else {
      const atualData = values[indexdata][2];
      verificaDias(atualData);
      }
      
      
  }).catch(error =>{
      console.error(error);
  });
}



 
 function mostra() {
  const sheetId = `1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE`;
  const apiKey = `AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM`;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:C?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const values = data.values;
      let emails = [];
      for (let i = 1; i < values.length; i++) { // começa do índice 1 para ignorar a primeira linha (que contém os cabeçalhos das colunas)
        const nome = values[i][0]; // primeira coluna (A) contém o nome
        const email = values[i][1]; // segunda coluna (B) contém o email
        const atualData = values[i][2];
        emails.push(email);
        
        console.log(`Nome: ${nome}, Email: ${email}, data: ${atualData}`);
      }
      
      const emailSorteado = emails[Math.floor(Math.random() * emails.length)]; // seleciona um email aleatório
      const quantidade = emails.filter(e => e === emailSorteado).length; // conta quantas vezes o email sorteado aparece na planilha
      console.log(`O email sorteado foi ${emailSorteado}, presente ${quantidade} vezes na planilha.`);
    })
    .catch(error => {
      console.error(error);
    });
}


function verificaDias(emailData) {
  const agora = new Date(); // data atual
  const seteDiasAtras = new Date(agora.getTime() - 7 * 24 * 60 * 60 * 1000); // data há 7 dias atrás

  const emailDataDate = new Date(emailData); // converte a string com a data do e-mail para um objeto Date

  // compara se a data do e-mail está entre a data de agora e a data há 7 dias atrás
  const dentroDoPrazo = emailDataDate >= seteDiasAtras && emailDataDate <= agora;
  
  if(dentroDoPrazo) {
      //alert('Não foi eviado')
      shurikenLoad.style.display = "none";
      ninjaWrong.style.display = "block"
      setTimeout(()=>{
          ninjaWrong.style.display = "none";
          limparInputs()
      }, 3000)
      
  }else {
      //alert('Foi enviado')
      enviar();
  }
}

function limparInputs() {
    let nomeInput = document.querySelector('#nome'); 
    let emailInput = document.querySelector('#email');
    nomeInput.value = "";
    emailInput.value = "";
    document.querySelector('form').reset(); // redefinir todos os valores do formulário
}




/* function mostra() {
  const sheetId = `1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE`;
  const apiKey = `AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM`;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:C?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const values = data.values;
      for (let i = 1; i < values.length; i++) { // começa do índice 1 para ignorar a primeira linha (que contém os cabeçalhos das colunas)
        const nome = values[i][0]; // primeira coluna (A) contém o nome
        const email = values[i][1]; // segunda coluna (B) contém o email

        console.log(`Nome: ${nome}, Email: ${email}`);
      }
    })
    .catch(error => {
      console.error(error);
    });
}
 */

/* const sheetId = '1A_x-nRCbkOjxdFo0KyFUBkglSQmauHSrZXG9lXWwRYE';
  const apiKey = 'AIzaSyACkpkChQCDXtLEmx2PrKY6SGRge9lHiPM';

 */
