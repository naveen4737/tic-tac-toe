var current_player = 'Player1';
var gameStopped = false;
var count = 0;
document.getElementById('display_chance').innerHTML = 'Turn of <b>Player-1 (X)<b>';

var text_color = 'black';
var back_color = 'white';

var mode = document.getElementById('mode');
mode.addEventListener('click', changeMode);

function changeMode(){
    console.log("mode changing")
    if(text_color==='black'){
        text_color = 'white'
        back_color = 'black'
        mode.innerHTML = 'Light Mode'
        mode.style.color = back_color
        mode.style.backgroundColor = text_color
    }else{
        text_color = 'black'
        back_color = 'white'
        mode.innerHTML = 'Dark Mode'
        mode.style.color = back_color
        mode.style.backgroundColor = text_color
    }
    document.body.style.backgroundColor = back_color
    document.getElementById('display_chance').style.color = text_color
    var x = document.querySelectorAll('#heading h1');
    x[0].style.color = text_color
    x[0].style.borderColor = text_color
    x = document.querySelectorAll('.inter')
    for(var i=0; i<9; i++)
        x[i].style.color = text_color
    x = document.querySelectorAll('.inter')
    for(var i=0; i<9; i++)
        x[i].style.borderColor = text_color
}

// console.log(document.getElementById('box').addEventListener('click', print(this)));
console.log('gcgvcbhjn')
// document.getElementById('box').addEventListener('onclick', print(this))

var locations = document.getElementsByClassName('inter');
console.log(locations)
 
for(var i=0; i<locations.length; i++){
    console.log(locations[i].innerHTML, " : 789645")
    locations[i].addEventListener('click', print);
    locations[i].addEventListener('mouseover', hovering);
    locations[i].addEventListener('mouseout', nothovering);
    //  console.log(locations[i]) 
}

function hovering(){
    // console.log(this,'   in HOVER')
    if(this.innerHTML == '' && gameStopped==false){
        // this.style.backgroundColor = 'wheat';
        // this.style.backgroundColor = 'rgb(253 251 251)';
        if(current_player === 'Player1'){
            this.innerHTML = 'X';
            this.style.color = 'gray';
        }else{
            this.innerHTML = 'O';
            this.style.color = 'gray';
        }
    }
}

function nothovering(){
    // console.log(this,'   out HOVER')
    // this.style.backgroundColor = 'white';
    if(current_player === 'Player1' && this.style.color!=text_color){
        this.innerHTML = '';
    }else if(current_player === 'Player2' && this.style.color!=text_color){
        this.innerHTML = '';
    }
}
 
function print(){

    var current_location = this.id;
    if( gameStopped == false && (document.getElementById(current_location).textContent==''||document.getElementById(current_location).style.color=='gray')){

        count++;    

        if(current_player === 'Player1'){
            document.getElementById(current_location).textContent = 'X';
            document.getElementById(current_location).style.color = text_color;
            current_player = 'Player2';
            // document.getElementById('player1').style.backgroundColor = 'white';
            // document.getElementById('player2').style.backgroundColor = 'red';
            document.getElementById('display_chance').innerHTML = 'Turn of <b>Player-2 (O)</b>';
        } else if(current_player === 'Player2'){
            document.getElementById(current_location).textContent = 'O';
            document.getElementById(current_location).style.color = text_color;
            current_player = 'Player1';
            // document.getElementById('player1').style.backgroundColor = 'red';
            // document.getElementById('player2').style.backgroundColor = 'white';
            document.getElementById('display_chance').innerHTML = 'Turn of <b>Player-1 (X)</b>';
        }

        for(var i=0; i<3 ; i++){
            // for(var j=0; j<3 ; j++){
            console.log(document.getElementById(`loc_${i}0`).innerHTML+"."+document.getElementById(`loc_${i}1`).innerHTML+"."+document.getElementById(`loc_${i}2`).innerHTML)
            // }
        }

        for(var i=0; i<3 ; i++){
            
            var xr1 = 0;
            var or1 = 0;

            var xc1 = 0;
            var oc1 = 0;
            for(var j=0; j<3 ; j++){
                // console.log('i and j are, ', i, '  ', j)
                var contentRow = document.getElementById(`loc_${i}${j}`).innerHTML;
                var contentColumn = document.getElementById(`loc_${j}${i}`).innerHTML;

                // console.log(content)

                if( contentRow == 'X' ){
                    xr1++;
                } else if( contentRow == 'O' ){
                    or1++;
                }
                if( xr1 == 3){
                    winner('Player 1');
                    gameStopped = true;
                    return;
                } else if( or1 == 3){
                    winner('Player 2');
                    gameStopped = true;
                    return;
                }
                
                if( contentColumn == 'X' ){
                    xc1++;
                } else if( contentColumn == 'O' ){
                    oc1++;
                }
                if( xc1 == 3){
                    winner('Player 1');
                    gameStopped = true;
                    return;
                } else if( oc1 == 3){
                    winner('Player 2');
                    gameStopped = true;
                    return;
                }
            }
        }

        
        var xl1 = 0;
        var ol1 = 0;

        var xr1 = 0;
        var or1 = 0;
        for(var i=0; i<3 ; i++){
            
            for(var j=0; j<3 ; j++){

                if( i == j){
                    var contentLeft = document.getElementById(`loc_${i}${j}`).innerHTML;
                    if( contentLeft == 'X' ){
                        xl1++;
                    } else if( contentLeft == 'O' ){
                        ol1++;
                    }
                    if( xl1 == 3){
                        winner('Player 1');
                        gameStopped = true;
                        return;
                    } else if( ol1 == 3){
                        winner('Player 2');
                        gameStopped = true;
                        return;
                    }
                }
                if(i+j == 2){
                    var contentRight = document.getElementById(`loc_${i}${j}`).innerHTML;
                    if( contentRight == 'X' ){
                        xr1++;
                    } else if( contentRight == 'O' ){
                        or1++;
                    }
                    if( xr1 == 3){
                        winner('Player 1');
                        gameStopped = true;
                        return;
                    } else if( or1 == 3){
                        winner('Player 2');
                        gameStopped = true;
                        return;
                    }
                }
            }
        }
        
        if(count == 9){
            winner("draw");
            return;
        }
    
    }
}

function winner(text){
    // console.log('Winner is ', text);
    if(text === "draw"){
        // document.getElementById('announcement').innerHTML = `Match Draw!!!`;
        document.getElementById('display_chance').innerHTML = `Match Draw!!!`;
    } else {
        // document.getElementById('announcement').innerHTML = `${text} WON THE GAME!!!`;
        if(text==="Player 1")
            document.getElementById('display_chance').innerHTML = `<b>${text} (X)</b><br>WON THE GAME!!!`;
        else
            document.getElementById('display_chance').innerHTML = `<b>${text} (O)</b><br>WON THE GAME!!!`;
    }

    // document.getElementById('player1').style.backgroundColor = 'yellow';
    // document.getElementById('player2').style.backgroundColor = 'yellow';
}
