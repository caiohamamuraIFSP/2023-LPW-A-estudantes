let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let logo = document.createElement('img');
logo.src = "https://ifsp.edu.br/images/Marca_IFSP_2015031.png";
let inimigo = document.createElement('img');
inimigo.src = "./imagens/pipoca.jfif";
let alturaLogo;
let larguraLogo;
let x = 0;
let y = 300;

logo.onload = function() {
    alturaLogo = logo.height;
    larguraLogo = logo.width;
    console.log(alturaLogo);
}

inimigo.onload = function() {
    ctx.drawImage(inimigo, 50, 50, 50, 50);
}

ctx.drawImage(logo, x, y, 50, 50);
ctx.drawImage(inimigo, 50, 50, 50, 50);

function desenhaLogo(a,b) {
    ctx.drawImage(logo, x+=a, y+=b, 50, 50);
    ctx.drawImage(inimigo, 50, 50, 50, 50);
}

document
  .getElementById("to_focus")
  .addEventListener("keydown", function(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (event.key === "d") {
        desenhaLogo(10,0)
    } else if (event.key === "a"){
        desenhaLogo(-10,0)
    } else if (event.key === "w"){
        desenhaLogo(0,-10)
    } else if (event.key === "s"){
        desenhaLogo(0,10)
    } else if (event.key === "w" && event.key === "d"){
        desenhaLogo(10,-10)
    } else if (event.key === "w" && event.key === "a"){
        desenhaLogo(10,-10)
    } else if (event.key === "s" && event.key === "d"){
        desenhaLogo(10,-10)
    } else if (event.key === "s" && event.key === "a"){
        desenhaLogo(-10,10)
    }
    }
);

// document
//   .getElementById("to_focus")
//   .addEventListener("keydown", function(event) {
//     if (event.key === "d") {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y, 50, 50);
//     } else if (event.key === "a"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x-=10, y, 50, 50);
//     } else if (event.key === "w"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x, y-=10, 50, 50);
//     } else if (event.key === "s"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x, y+=10, 50, 50);

//     } else if (event.key === "w" && event.key === "d"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y+=10, 50, 50);
//     } else if (event.key === "w" && event.key === "a"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y+=10, 50, 50);
//     } else if (event.key === "s" && event.key === "d"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y+=10, 50, 50);
//     } else if (event.key === "s" && event.key === "a"){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y+=10, 50, 50);
//     }
// });



// function andar(){
//     document
//   .getElementById("to_focus")
//   .addEventListener("keydown", function(event) {
//     if (event.key === "d") {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x+=10, y);
//     }
// });
// }



// body.addEventListener("keydown", function(event) {
//     if (event.key === "d") {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x++, y++);
//     }
// });

// canvas.addEventListener("keydown", function (event) {
  
//     if (event.key === "d") {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x++, y++);
    
//     } else if (event.key === "a") {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(logo, x++, y++);
      
//     }
//   });



// andar

// function andar(){
//     canvas.addEventListener("keydown", function (event) {
  
//         if (event.key === "d") {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.drawImage(logo, x++, y++);
        
//         } else if (event.key === "a") {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.drawImage(logo, x++, y++);
          
//         }
//       });
// andar
// }



// function loop() {
//     x += velX;
//     y += velY;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(logo, x, y);

//     if (
//         y >= canvas.height - alturaLogo ||
//         y <= 0
//         ) {
//         velY *= -1; 
//     }
//     if (
//         x >= canvas.width - larguraLogo ||
//         x <= 0
//         ) {
//         velX *= -1; 
//     }
//     requestAnimationFrame(loop);
// }

// requestAnimationFrame(loop);