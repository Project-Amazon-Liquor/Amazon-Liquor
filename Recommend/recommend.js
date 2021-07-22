loadchoices();

function loadchoices(event) {
  var choice = document.getElementById("choice").value;

  if (choice === "Select") {
    document.getElementById("result").innerHTML =
      " Please Choose an option above";
  }

  if (choice === "Celebrating Something? Champagne?") {
    document.getElementById("result").innerHTML =
      " We have Veuve Clicquot Brut Yellow Label, Pol Roger Brut & Bollinger La Grande Annee Brut ";
  }
  if (choice === "Something Sweet?") {
    document.getElementById("result").innerHTML =
      " We have Veuve Vietti Moscato d'Asti Cascinetta Vietti, Domaine Des Nouelles Rosé d'Anjou & Peter Lauer Barrel X Riesling  ";
  }
  if (choice === "Celebrating Something? Champagne?") {
    document.getElementById("result").innerHTML =
      " We have Veuve Clicquot Brut Yellow Label, Pol Roger Brut & Bollinger La Grande Annee Brut ";
  }
  if (choice === "Celebrating Something? Champagne?") {
    document.getElementById("result").innerHTML =
      " We have Veuve Clicquot Brut Yellow Label, Pol Roger Brut & Bollinger La Grande Annee Brut ";
  }
  if (choice === "Beer") {
    document.getElementById("result").innerHTML =
      " We have Skol, Budweiser, Tsingtao, Snow & Heinken";
  }
  if (choice === "Wine") {
    document.getElementById("result").innerHTML =
      " We have pinot noir, Cloudy bay, Masseto ";
  }
  if (choice === "Whiskey") {
    document.getElementById("result").innerHTML =
      " We have Green Label, Black Label, Blue Label and Chivas Reagal";
  }
}
