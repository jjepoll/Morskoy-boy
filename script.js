let miss = document.querySelectorAll(".cage")
    	let one = document.querySelectorAll(".cage1")
    	let two = document.querySelectorAll(".cage2")
    	let three = document.querySelectorAll(".cage3")
    	let four = document.querySelectorAll(".cage4")
    	let score = 0
    	let counter = 5
    	let boats = 10
    	let boats3 = 6

    for(let i=0; i<80; i=i+1){
        miss[i].onclick = function(){
         score = score + 0
         counter = counter - 1
         document.querySelector('.counter').innerHTML = counter;
         document.querySelector('.score').innerHTML = score;
    	 miss[i].style.background = 'black'
    	 if(counter==-1){
		   document.querySelector('.bigdiv').style.display = 'none';
		   document.querySelector('.menu').style.display = 'none';
	    }
        }
    }

    for(let i=0; i<4; i=i+1){
        one[i].onclick = function(){
         score = score + 1
         counter = 5
         boats = boats - 1
         document.querySelector('.counter').innerHTML = counter;
         document.querySelector('.boats').innerHTML = boats;
         document.querySelector('.score').innerHTML = score;
    	 one[i].style.background = 'red'
    	 if(score==20){
		   document.querySelector('.bigdiv').style.display = 'none';
		   document.querySelector('.menu').style.display = 'none';
		   document.querySelector('.win').style.display = 'block';
           alert('You win!')
	    }
        }
    }
    for(let i=0; i<6; i=i+1){
        two[i].onclick = function(){
         score = score + 1
         counter = 5
         boats = boats - 0.5
         document.querySelector('.counter').innerHTML = counter;
         document.querySelector('.boats').innerHTML = boats;
         document.querySelector('.score').innerHTML = score;
    	 two[i].style.background = 'green'
    	 if(score==20){
		   document.querySelector('.bigdiv').style.display = 'none';
		   document.querySelector('.menu').style.display = 'none';
		   document.querySelector('.win').style.display = 'block';
           alert('You win!')
	    }
        }
    }
    for(let i=0; i<6; i=i+1){
        three[i].onclick = function(){
         score = score + 1
         counter = 5
         boats3 = boats3 - 1
         document.querySelector('.counter').innerHTML = counter;
         document.querySelector('.score').innerHTML = score;
    	 three[i].style.background = 'blue'
    	 if(score==20){
		   document.querySelector('.bigdiv').style.display = 'none';
		   document.querySelector('.menu').style.display = 'none';
		   document.querySelector('.win').style.display = 'block';
           alert('You win!')
	    }
	    if(boats3==3){
		   boats = boats - 1
		   document.querySelector('.boats').innerHTML = boats;
	    }
	    if(boats3==0){
		   boats = boats - 1
		   document.querySelector('.boats').innerHTML = boats;
	    }
        }
    }
    for(let i=0; i<4; i=i+1){
        four[i].onclick = function(){
         score = score + 1
         counter = 5
         boats = boats - 0.25
         document.querySelector('.boats').innerHTML = boats;
         document.querySelector('.counter').innerHTML = counter;
         document.querySelector('.score').innerHTML = score;
    	 four[i].style.background = 'purple'
    	 if(score==20){
    	   document.querySelector('.win').style.display = 'block';
		   document.querySelector('.bigdiv').style.display = 'none';
		   document.querySelector('.menu').style.display = 'none';
           alert('You win!')
	    }
        }
    }