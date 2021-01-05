function conversione() {
  var pi = 3.14159265359
  var r_unit = Math.pow(10,document.getElementById("r_unit").selectedOptions[0].value);
  var r = r_unit*document.getElementById("mag").value;
  var theta = pi*document.getElementById("angle").value/180;
  var digit=document.getElementById("digit").selectedOptions[0].value;
  var x = Math.cos(theta)*r;
  var y = Math.sin(theta)*r;
  var xy_unit = Math.pow(10,document.getElementById("xy_unit").selectedOptions[0].value);
  
  var factor = Math.pow(10, digit);
  var xr = Math.round(x*factor/xy_unit)/factor;
  var yr = Math.round(y*factor/xy_unit)/factor;
  document.getElementById("risultato").innerHTML = "x: " + xr.toString() +"<br><br>y: " + yr.toString();
  document.getElementById("risultato").style.visibility = "visible"; 
}


function pulisci() {
	document.getElementById("risultato").style.visibility = "hidden"; 
	document.getElementById("mag").value="";
	document.getElementById("angle").value="";
}
