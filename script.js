var ball = document.getElementById("position");
var container = document.getElementById("contains");
//var ballblue = document.getElementById("positionr2");

var x /*left vertical*/= 120;
var y /*top horizontal*/= 25;
var dx = 10;
var dy = 10;

//alert(" ici "+container.offsetWidth+" et ici "+container.offsetHeight);
ball.addEventListener('click', () =>{
    function deplacerBall() {
        if(x + dx>container.offsetWidth-ball.offsetWidth || x+dx <0){
            dx = -dx;
        }
        if(y + dy>container.offsetHeight-ball.offsetHeight || y + dy <0){
            dy = -dy;
        }
    
        x+=dx;
        y+=dy;
        dx-=1;
        dy-=1;

        if(dx<=0 && dy<=0)
            clearInterval(timerld);

        ball.style.left = x+"px";
        ball.style.top = y+"px";
    }   

   var timerld = setInterval(deplacerBall,50);
})


