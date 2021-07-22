loadchoices();

function loadchoices(event) {
  var choice = document.getElementById("choice").value;
  if (choice === "Select") {
    document.getElementById("result").innerHTML =
      " Please Choose an option above";
  }

  if (choice === "Moscow Mule") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/Moscow_Mule.jpg"> Combine the ginger beer, lime juice and vodka in a pitcher. Serve over ice. If desired, serve with lime slices.  Ingredients: 4 cups ginger beer, chilled, 2/3 cup lime juice, 1-1/4 cups vodka, Ice cubes, Lime slices, optional`;
  }
  if (choice === "Double Chocolate Martini") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="Image/Double Chocolate Martini.jpg">Sprinkle grated chocolate onto a plate. Moisten the rim of a martini glass with water; hold glass upside down and dip rim into chocolate. Place cherry in glass. If desired, garnish glass with chocolate syrup. Fill a tumbler or mixing glass three-fourths full with ice. Add the cream, vodka, chocolate liqueur and creme de cacao; stir until condensation forms on outside of tumbler. Strain into glass; serve immediately. Ingredients: Grated chocolate, 1 maraschino cherry, Chocolate syrup, Ice cubes, 2-1/2 ounces half-and-half cream, 1-1/2 ounces vodka, 1-1/2 ounces chocolate liqueur, 1-1/2 ounces creme de cacao`;
  }
  if (choice === "French 75") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/French 75.jpg">Sprinkle a thin layer of sugar on a plate. Moisten the rim of a chilled champagne flute with water; hold glass upside down and dip rim into sugar. Fill a shaker three-fourths full with ice. Add gin, confectioners' sugar and lemon juice; cover and shake until condensation forms on outside of shaker, 10-15 seconds. Strain into prepared flute top with champagne. Ingredients are Coarse sugar , Ice cubes, 3/4 ounce gin, 1 tablespoon confectioners sugar, 2 teaspoons lemon juice, 3 ounces chilled champagne.`;
  }
  if (choice === "Bloody Mary") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/Bloody Mary.jpg">Using water, moisten rim of a highball glass. Sprinkle 1/4 teaspoon celery salt on a small plate; dip rim into salt. Discard remaining celery salt from plate. Fill a shaker three-fourths full with ice. Place remaining ice in prepared glass. Add vodka, juices, Worcestershire sauce, horseradish if desired, pepper, remaining celery salt and pepper sauce to shaker; cover and shake until condensation forms on exterior, 10-15 seconds. Strain into prepared glass. Garnish as desired. Ingredients 1/4 teaspoon plus 1/8 teaspoon celery salt, divided, 1-1/2 to 2 cups ice cubes, divided, 2 ounces vodka, 1 cup tomato juice, chilled, 1 tablespoon lemon juice, 1-1/2 teaspoons lime juice, 3/4 teaspoon Worcestershire sauce, 1/2 teaspoon prepared horseradish, optional.`;
  }
  if (choice === "White Russian") {
    document.getElementById("result").innerHTML = `
    <img class="img-fluid rounded mx-auto d-block" src="./Image/White Russian.jpg">Place ice in a rocks glass. Add vodka and Kahlua; top with cream.Ingredients: 1-1/2 ounces vodka, 1-1/2 ounces Kahlua, 3 ounces heavy whipping cream or milk`;
  }

  if (choice === "Want to forget what you had for dinner previous night?") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/johnny walker.jpg"> 
    We have Green Label, Black Label, Blue Label and Chivas Reagal`;
  }

  if (choice === "Something Sweet?") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/sweet wine.jpg">We have Veuve Vietti Moscato d'Asti Cascinetta Vietti, Domaine Des Nouelles Rosé d'Anjou & Peter Lauer Barrel X Riesling  `;
  }
  if (choice === "Celebrating Something? Champagne?") {
    document.getElementById(
      "result"
    ).innerHTML = `<img class="img-fluid rounded mx-auto d-block" src="./Image/champagne.jpg"> We have Veuve Clicquot Brut Yellow Label, Pol Roger Brut & Bollinger La Grande Annee Brut `;
  }
}
