function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
function studentScore(){
    var num = prompt("Please enter the number of students:");
    var sum = 0;
    var average;
    for (var i = 1; i <= num; i++) {
     
        var fen = Number(prompt("Please enter the score of student " + i + ":"))
        
        sum += fen;
    }

    average = sum / num;
    alert("Total score: " + sum + "Average score: " + average);
}