function addNewField(){

    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('workexperience');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter workexperience");

    let weOb = document.getElementById("we");
    let weAddbbuttonob = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode,weAddbbuttonob);


}
function addNewEducationField(){
    let newNode = document.createElement('textarea');


    newNode.classList.add('form-control');
    newNode.classList.add('education');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter education");

    let edOb = document.getElementById("ed");
    let edAddbbuttonob = document.getElementById("aqAddbutton");

    edOb.insertBefore(newNode,edAddbbuttonob);

}
// genterate resume all
function generateResume() {

    
    var name = document.getElementById("name").value;
    var namet1 = document.getElementById("namet1");
     namet1.innerHTML = name;

 

    //direct
     document.getElementById("namet2").innerHTML= name;

     //contact"
     document.getElementById("contactt").innerHTML=document.getElementById("phone").value;


     document.getElementById("emailt").innerHTML=document.getElementById("email").value;

     document.getElementById("addressT").innerHTML=document.getElementById("address").value;
    //  link
     document.getElementById("linkt").innerHTML=document.getElementById("linkedin").value;
     document.getElementById("gitt").innerHTML=document.getElementById("github").value;
     document.getElementById("instat").innerHTML=document.getElementById("instagram").value;
    //  document.getElementById("twittert").innerHTML=document.getElementById(twitter).value;
     document.getElementById("facebookt").innerHTML=document.getElementById("facebook").value;

     //objective
     document.getElementById("objectivet").innerHTML=document.getElementById("objective").value;

    //  work experience
    var wes = document.getElementsByClassName("workexperience");
    console.log("Number of elements with class 'weField':", wes.length);
    var str = '';
    for (var e of wes) {
    console.log("Value of element:", e.value);
    str = str + `<li> ${e.value} </li>`;
    }
    console.log("Resulting HTML string:", str);

    document.getElementById("weT").innerHTML = str;

    // education

    var eds = document.getElementsByClassName("education");
    console.log("Number of elements with class 'edField':", eds.length);
    var str1 = '';
    for (var f of eds) {
    console.log("Value of element:", f.value);
    str1 = str1 + `<li> ${f.value} </li>`;
    }
    console.log("Resulting HTML string:", str1);

    document.getElementById("edT").innerHTML = str1;


    //setting image
    let file = document.getElementById("imgField").files[0]
    console.log(file);     

     let reader = new FileReader()
     reader.readAsDataURL(file);
     console.log(reader.result);

     //set the image to template
     reader.onloadend = function (){
     document.getElementById('imgT').src = reader.result;
     }
     //hide form
    document.getElementById('resumeform').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';



     


}

// print resume
function printResume(el) {
    var restorpage = document.body.innerHTML;
    var printresume = document.getElementById(el).innerHTML;
    document.body.innerHTML = printresume;
    window.print();
}