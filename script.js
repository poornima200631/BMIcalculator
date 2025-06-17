function cal(weight,height){
    let w = parseFloat(document.getElementById(`${weight}`).value);
    let h = parseFloat(document.getElementById(`${height}`).value);
   
    if (!w || !h) {
        alert("Please enter valid weight and height.");
        return;
      }
 
    h = h / 100; 
    let bmi = w / (h * h)
if (bmi <= 18.5) {
    window.location.href = "underweight.html";
  } else if (bmi <= 24.9) {
    window.location.href = "normal.html";
  } else  {
    window.location.href = "overweight.html";
  }
  
}