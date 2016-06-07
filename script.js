

var hasConfirmed = confirm("Are your ready to play?");
console.log(hasConfirmed);
if (hasConfirmed)
{
  var varName= prompt("What is your name");
  if (varName.length <= 2)
  {
    varName="Adrian";
  }
  document.write("<p>Hello " + varName);
  document.write("<br>Your game is about to begin.<br>\
  You have just arrived at a 4 way stop.</p>");

  var myAnswer1 = prompt("Are you the only one waiting? (yes/no)");
  if (myAnswer1 === "yes")
  {
      document.write("<p>Procced safely throught the intersection");
  }
  else {

    var myAnswer2 = prompt ("Are you the first one here?");
    if (myAnswer2 === "yes")
    {
        document.write("<p>Proceed safely throught the intersection.");
    }
    else {
    }

    }

}
