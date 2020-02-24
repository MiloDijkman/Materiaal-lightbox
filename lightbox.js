const watBlijven = document.querySelectorAll('.blijfen')
const watWeg = document.querySelectorAll('.wegenblijf')

// de noodlist dat weg moet in een array stoppen

const info = []

for(let i=0; i<watWeg.length; i++) {
  info.push(watWeg[i]);
  // element uit de DOM verwijderen
  watWeg[i].remove();
}

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times';
maakSluitKnop.addEventListener('click', sluitModaal);

function maakModaal(num) {
   let modaal = document.createElement('div');
   modaal.id = 'modaal';

   let modaalInhoud = document.createElement('div');
   modaalInhoud.className = 'modaal-inhoud';
   modaalInhoud.innerHTML = info[num].innerHTML;
   modaalInhoud.addEventListener('click', function(sluit){
     sluit.stopPropagation();
   })

   modaalInhoud.prepend(maakSluitKnop);
   modaal.append(modaalInhoud);
   document.body.append(modaal);

}

function sluitModaal() {
  document.getElementById('modaal').remove();
}

for(let i = 0; i < watBlijven.length; i++) {
  watBlijven[i].addEventListener('click', function() {
    maakModaal(i)

  });
}
