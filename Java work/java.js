
/* USED FOR MAIN CONTENT AREA  */

function m1() {
	/* USED FOR TITLE OF MAIN CONTENT AREA  */
    var x = document.getElementById("demo1");
    x.style.fontSize = "12px";           
    x.style.color = "white"; 
	x.style.backgroundColor="#686a6d";
	x.style.paddingTop="40px";

	/* USED FOR PARA OF MAIN CONTENT AREA  */
	
	var y = document.getElementById("heading");
	y.style.fontSize="40px";
	y.style.color="#0a25f3";
	y.style.textAlign="center"
	y.style.textShadow="4px 9px 4px red"
}

/* USED FOR IMAGE AREA  */

function m2() {
	/* USED FOR TITLE OF IMAGE AREA  */
    var x = document.getElementById("demo2");
	x.style.backgroundImage="url('imagejava/header.jpg')";
	
	
	/* USED FOR PARA OF IMAGE AREA  */
	var y = document.getElementById("para2");
	y.style.color="white"
	/* USED FOR CHANGE IMAGE */
	var z=document.getElementById("image1");
	z.src="imagejava/2.jpg";
 }
 
 
 /* USED FOR BUTTON  AREA  */
 
 function m3() {
	 
	 /* USED FOR BUTTON-1 BACKGROUND AND COLOR AREA  */
    var x = document.getElementById("btn1");
	x.style.backgroundColor="#ece910";
	x.style.color="black";
	
	 /* USED FOR BUTTON-2 BACKGROUND  AREA  */
	var y = document.getElementById("btn2");
	y.style.backgroundColor="#ec1082";
	
	 /* USED FOR BUTTON-3 BACKGROUND  AREA  */
	var y = document.getElementById("btn3");
	y.style.backgroundColor="#01050a";
 }
 
 
 /*--JAVA Direct work */
 var p1=document.getElementById("btn_margin");
 p1.style.marginBottom="3px";
 
 var p= document.getElementById("addbg_image");//backgriund image setup 
 p.style.backgroundImage="url('imagejava/header.jpg')";
 //ist para 
 
 document.getElementById("addpara").innerHTML="JAVA DIRECT" +"<br>"+"<br>"+"calls on the abundant creative energies of the world. Our undergraduate and graduate programs draw on the extraordinary AIUB faculty to work with students to become intellectual and professional leaders ---no matter what career they might eventually choose. The website's offerings demonstrate that the faculties of four different disciplines are the nuclei of our teaching and pioneering center, where leaders are created. Our programs produce graduates responsive to the needs of modern business";
 
 var s=document.getElementById("addpara");
 s.style.textAlign="justify";
 s.style.color="white";
 s.style.fontSize="14px";
 
 //second image/para
 var x1= document.getElementById("image2");
 x1.src="imagejava/3.jpg";
 //Third image/para
 var x2= document.getElementById("image3");
 x2.src="imagejava/4.jpg";
 
 //warning
 window.alert("You entered beautiful page");
 
 
 /*  ************  NOW APplied jquery*****  */
 