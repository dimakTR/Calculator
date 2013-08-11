(function() {
    if (window.calculatorWidget) return;
    window.calculatorWidget = 1;
      
    if (window.addEventListener) {
        window.addEventListener("load", main, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", main);
    } else window.onload = main;
    

    // widget's functions -------------------------------------

    function log(txt) {
        if (window.console && console.log) console.log(txt);
    }

    function makeWidget(widgetEl, param) {
        if (!widgetEl) {
            log('The widget was not found');
            return;
        }

        var mainEl = document.createElement("div"); 
        mainEl.className = "main";

        var faceEl = document.createElement("input");
        faceEl.id = "face";
        faceEl.type = "text";
        faceEl.value = "0";
        faceEl.onkeydown=function(){return false;};
        
        
        var first_row = document.createElement("div");
        
        var button_multiply = document.createElement("button");
        button_multiply.className = "buttons";
        button_multiply.innerHTML = "*";
        button_multiply.onclick = function() {multiply();};
        
        
        var button_divide = document.createElement("button");
        button_divide.className = "buttons";
        button_divide.innerHTML = "/";
        button_divide.onclick = function() {divide();};
        
        var button_plus = document.createElement("button");
        button_plus.className = "buttons";
        button_plus.innerHTML = "+";
        button_plus.onclick = function() {plus();};
        
        var button_subtract = document.createElement("button");
        button_subtract.className = "buttons";
        button_subtract.innerHTML = "-";
        button_subtract.onclick = function() {subtract();};
        
        var second_row = document.createElement("div");
        
        var button_7 = document.createElement("button");
        button_7.className = "buttons";
        button_7.innerHTML = "7";
        button_7.onclick = function() {seven();};
        
        
        var button_8 = document.createElement("button");
        button_8.className = "buttons";
        button_8.innerHTML = "8";
        button_8.onclick = function() {eight();};
        
        
        var button_9 = document.createElement("button");
        button_9.className = "buttons";
        button_9.innerHTML = "9";
        button_9.onclick = function() {nine();};
        
        var button_clear = document.createElement("button");
        button_clear.className = "buttons";
        button_clear.innerHTML = "C";
        button_clear.onclick = function() {clear();};
        
       
        var third_row = document.createElement("div");
        
        var button_4 = document.createElement("button");
        button_4.className = "buttons";
        button_4.innerHTML = "4";
        button_4.onclick = function() {four();};
        
        var button_5 = document.createElement("button");
        button_5.className = "buttons";
        button_5.innerHTML = "5";
        button_5.onclick = function() {five();};
        
        var button_6 = document.createElement("button");
        button_6.className = "buttons";
        button_6.innerHTML = "6";
        button_6.onclick = function() {six();};
        
        var button_del = document.createElement("button");
        button_del.className = "buttons";
        button_del.innerHTML = "&larr;";
        button_del.onclick = function() {del();};
        
        var fourth_row = document.createElement("div");
        
        var button_equally = document.createElement("button");
        button_equally.className = "buttons";
        button_equally.innerHTML = "=";
        button_equally.id = "button_equally";
        button_equally.onclick = function() {equally();};
        
       
        var fifth_row = document.createElement("div");
        
        var button_1 = document.createElement("button");
        button_1.className = "buttons";
        button_1.innerHTML = "1";
        button_1.onclick = function() {one();};
        
        
        var button_2 = document.createElement("button");
        button_2.className = "buttons";
        button_2.innerHTML = "2";
        button_2.onclick = function() {two();};
        
        
        var button_3 = document.createElement("button");
        button_3.className = "buttons";
        button_3.innerHTML = "3";
        button_3.onclick = function() {three();};
        
        
        var sixth_row = document.createElement("div");
        
        var button_0 = document.createElement("button");
        button_0.className = "buttons";
        button_0.innerHTML = "0";
        button_0.id = "button_0"
        button_0.onclick = function() {zero();};
        
        
        var button_dot = document.createElement("button");
        button_dot.className = "buttons";
        button_dot.innerHTML = ".";
        button_dot.onclick = function() {dot();};
        
        
        
       
        
        mainEl.appendChild(faceEl);
        mainEl.appendChild(first_row);
        first_row.appendChild(button_multiply);
        first_row.appendChild(button_divide);
        first_row.appendChild(button_plus);
        first_row.appendChild(button_subtract);
        
        mainEl.appendChild(second_row);
        second_row.appendChild(button_7);
        second_row.appendChild(button_8);
        second_row.appendChild(button_9);
        second_row.appendChild(button_clear);
        
        mainEl.appendChild(third_row);
        third_row.appendChild(button_4);
        third_row.appendChild(button_5);
        third_row.appendChild(button_6);
        third_row.appendChild(button_del);
        
        mainEl.appendChild(fourth_row);
        fourth_row.appendChild( button_equally);
        
        mainEl.appendChild(fifth_row);
        fifth_row.appendChild(button_1);
        fifth_row.appendChild(button_2);
        fifth_row.appendChild(button_3);
        
        mainEl.appendChild(sixth_row);
        sixth_row.appendChild(button_0);
        sixth_row.appendChild(button_dot);
            
        

        widgetEl.appendChild(mainEl);
        
        
        
      
        
        
    }
        
    // main function
    function main() {
        var widgetDivs = document.getElementsByClassName('calculatorWidget');

        if (widgetDivs.length == 0) {
           log("There are no containers for calculator widget on the page.");
           return;
        };

        var params = new Array();
        for (var i = 0; i < widgetDivs.length; i++) {
            var placeholder = document.getElementById(widgetDivs[i].id);
            var parameters = {
                widgetId: widgetDivs[i].id ? widgetDivs[i].id : 'calculatorWidget',
            };
           params[i] = parameters;
        
        }
        
        // just from current directory for now, but it can be full url, for example http:/localhost/calculator.css
        var cssHost = "./calculator.css";
        
        addCss(cssHost);

       for (var i = 0; i < params.length; i++) {
           var widgetEl = document.getElementById(params[i].widgetId);
           makeWidget(widgetEl, params[i]);
       }
        
    }    

    function addCss(css){
        var head = document.getElementsByTagName('head')[0];
        var s = document.createElement('link');
        s.setAttribute('type', 'text/css');
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('href', css);

        head.appendChild(s);    
    }

    
    //logic functions -----------------------
    

    var number_1,b,number_2;
        number_1 = '0';
        b = '';
        number_2 = '';
        
       

    


//Функция расчета
function calculations() {
var face = document.getElementById('face');
	switch (b){
		case '*' :{
            if ( number_2 === '') {
                face.value = parseFloat(number_1) * parseFloat(number_1);
                number_1 = face.value;
                b = '';
            }
            else {
                face.value = parseFloat(number_1) * parseFloat(number_2);
                number_1 = face.value;
                number_2 = '';
                b = '';
            }
		break;
		}
		case '/' :{
			if (number_2 == '0') {
				face.value = "Деление на 0 невозможно";
			}
			else {
                if ( number_2 === ''){
                    face.value = parseFloat(number_1) / parseFloat(number_1);
                    number_1 = face.value;
                    b = '';
                }
                else {
                    face.value = parseFloat(number_1) / parseFloat(number_2);
                    number_1 = face.value;
                    number_2 = '';
                    b = '';
                }    
			}
		break;
		}
		case '+' :{
            if ( number_2 === ''){
                face.value = parseFloat(number_1) + parseFloat(number_1);
                number_1 = face.value;
                b = '';
            }
            else {
                face.value = parseFloat(number_1) + parseFloat(number_2);
                number_1 = face.value;
                number_2 = '';
                b = '';
            }
		break;
		}
		case '-' :{
            if ( number_2 === ''){
                face.value = parseFloat(number_1) - parseFloat(number_1);
                number_1 = face.value;
                b = '';
            }
            else {
                face.value = parseFloat(number_1) - parseFloat(number_2);
                number_1 = face.value;
                number_2 = '';
                b = '';
            }
		break;
		}
	} 
}



//--------------Кнопки--------------------
function one() {
var face = document.getElementById('face');
  if (face.value == "0"){
	 face.value = '1';
	 number_1 = number_1 + '1';
  }
  else {
	if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
		face.value = face.value + '1';
		number_2 = number_2 + '1';
    }
    else {
		face.value = face.value + '1';
		number_1 = number_1 + '1';
	}
  }
  
}
function two() {
var face = document.getElementById('face');
  if (face.value == "0"){
	  face.value = '2';
      number_1 = number_1 + '2';
  }
  else {
	  if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
		 face.value = face.value + '2';
		 number_2 = number_2 + '2';
	}
	  else {
		   face.value = face.value + '2';
		   number_1 = number_1 + '2';
	  } 
  }
}
function three() {
var face = document.getElementById('face');
  if (face.value == "0"){
	  face.value = '3';
	  number_1 = number_1 + '3';
  }
  else {
	 if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
		face.value = face.value + '3';
		number_2 = number_2 + '3';
     }
    else {
		face.value = face.value + '3';
		number_1 = number_1 + '3';
	}
  }
}
function four() {
var face = document.getElementById('face');
  if (face.value == "0"){
	  face.value = '4';
	  number_1 = number_1 + '4';
  }
  else {
	  if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
	  face.value = face.value + '4';
	  number_2 = number_2 + '4';
      }
      else {
		  face.value = face.value + '4';
		  number_1 = number_1 + '4';
	  }
  }
}
function five() {
var face = document.getElementById('face');
  if (face.value == "0"){
	  face.value = '5';
      number_1 = number_1 + '5';
  }
  else {
	   if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
	   face.value = face.value + '5';
	   number_2 = number_2 + '5';
       }
       else {
            face.value = face.value + '5';
			number_1 = number_1 + '5';
	   }
  }
}
function six() {
var face = document.getElementById('face');
   if (face.value == "0"){
	  face.value = '6';
	  number_1 = number_1 + '6';
   }
   else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '6';
			number_2 = number_2 + '6';
	    }
		else {
			face.value = face.value + '6';
			number_1 = number_1 + '6';
	    }
   }
}
function seven() {
       var face = document.getElementById('face');
   if (face.value == "0"){
		face.value = '7';
		number_1 = number_1 + '7';
   }
  else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '7';
			number_2 = number_2 + '7';
		}
		else {
			face.value = face.value + '7';
			number_1 = number_1 + '7';
		}
  }
}    
function eight() {
var face = document.getElementById('face');
   if (face.value == "0"){
		face.value = '8';
		number_1 = number_1 + '8';
   }
  else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '8';
			number_2 = number_2 + '8';
		}
		else {
			face.value = face.value + '8';
			number_1 = number_1 + '8';
		}
  }
}
function nine() {
var face = document.getElementById('face');
   if (face.value == "0"){
		face.value = '9';
		number_1 = number_1 + '9';
   }
   else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '9';
			number_2 = number_2 + '9';
	   }
		else {
			face.value = face.value + '9';
			number_1 = number_1 + '9';
        }
   }
}
function zero() {
var face = document.getElementById('face');
  if (face.value == "0"){
		face.value = '0';
		number_1 = number_1 + '0';
  }
  else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '0';
			number_2 = number_2 + '0';
	    }
		else {
			face.value = face.value + '0';
			number_1 = number_1 + '0';
		}
  }
}
function dot() {
var face = document.getElementById('face');
  if (face.value == "0"){
		face.value = face.value + '.';
		number_1 = number_1 + '.';
  }
  else {
		if ((b == "*") || ( b == "/") || ( b == "-") || (b == "+")) {
			face.value = face.value + '0.';
			number_2 = number_2 + '0.';
	    }
		else {
			face.value = face.value + '.';
			number_1 = number_1 + '.';
		}
  }
}




//-------------Равно и очистка-----------
function equally() {
	calculations();
}
function clear() {
var face = document.getElementById('face');
	face.value = "0";
	number_1 = '0';
    b = number_2 = '';
}


//----------------------Действия--------------------

function subtract() {
var face = document.getElementById('face');
  if ( (b !== '') && (number_2 !== '') ){
     calculations();
	 face.value = face.value + '-'
	 b = '-';
  }
  else {
		if (( b == '') && ( number_2 == '')){
			face.value = face.value + '-';
		}
		else {
			face.value = face.value.slice(0,-1) + '-';
        }
  b='-';
 
  }
} 

function divide() {
var face = document.getElementById('face');
  if ( (b !== '') && (number_2 !== '') ){
     calculations();
	 face.value = face.value + '/'
	 b = '/';
  }
  else {
		if (( b == '') && ( number_2 == '')){
			face.value = face.value + '/';
		}
		else {
			face.value = face.value.slice(0,-1) + '/';
		}
  b='/';
  }  
}  

function multiply() {
var face = document.getElementById('face');
  if ( (b !== '') && (number_2 !== '') ){
    calculations();
	face.value = face.value + '*'
	b = '*';
  }
  else {
		if (( b == '') && ( number_2 == '')){
			face.value = face.value + '*';
		}
		else {
			face.value = face.value.slice(0,-1) + '*';
		}
  b='*'; 
  }
} 

function plus() {
var face = document.getElementById('face');
  if ( (b !== '') && (number_2 !== '') ){
     calculations();
	 face.value = face.value + '+'
	 b = '+';
  }
  else {
		if (( b == '') && ( number_2 == '')){
			face.value = face.value + '+';
		}
		else {
			face.value = face.value.slice(0,-1) + '+';
		}
  b='+'; 
  }
} 

function del() {
var face = document.getElementById('face');
  if ( (b === '') && (number_2 === '') ) {
		face.value = face.value.slice(0,-1);
		number_1 = number_1.slice(0,-1);	
  }
  else {
		if( (b !== '') && (number_1 !== '') && (number_2 !=='') ){
			 face.value = face.value.slice(0,-1);
			 number_2 = number_2.slice(0,-1);
		}
  }
}

      
})();
