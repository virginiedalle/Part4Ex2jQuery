$(function(){
$('#valid').click(function(){
  //On stocke dans des variables la valeur récupérée des input. Grâce à number, on met les strings en nombres.
  var firstNote = Number($('#firstNote').val());
  var secondNote = Number($('#secondNote').val());
  var thirdNote = Number($('#thirdNote').val());
  var fourthNote = Number($('#fourthNote').val());
  var fifthNote = Number($('#fifthNote').val());
  //On fait la moyenne par rapport aux 5 notes.
  var average = (firstNote + secondNote + thirdNote + fourthNote + fifthNote) / 5;
  if(average >= 0 && average < 10){
    alert('Moyenne : ' + average + '\nAppréciations : \nEn dessous de la moyenne.');
  }else if (average >= 10 && average < 13){
    alert('Moyenne : ' + average + '\nAppréciations : \nMoyen.');
  }else if (average >= 13 && average < 16){
    alert('Moyenne : ' + average + '\nAppréciations : \nBien.');
  }else if (average >= 16 && average < 20){
    alert('Moyenne : ' + average + '\nAppréciations : \nTrès bien.');
  }else{
    alert('Excellent !');
  }
});
});
