// conteur avec chiffre en lettre
const display = {
    elementShow: function(id, affichage){
        document.getElementById(id).innerHTML = affichage;
    },
    clickEvent: function(id, functions){
        document.getElementById(id).addEventListener('click', functions)
    }
}
let num = document.getElementById('number')

function toLetter(nbr){
    const unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize']
    const dizaine = ['', 'dix','vingt', 'trente', 'quarante', 'cinquante', 'soixante','', 'quatre-vingt', '']
    if (nbr<17) {
        for (let i = 0; i < unite.length; i++) {
            if(nbr == i){
                return unite[i]
            }    
        }
    }
    
    if (nbr>16 && nbr<60) {
        return dizaine[parseInt(nbr/10)] +'-'+ unite[nbr%10]
    }
    if (parseInt(nbr/10)%2 == 0  && nbr>=60 && nbr<100) {
        return dizaine[parseInt(nbr/10)] +'-'+ unite[nbr%10]
    }
    if (parseInt(nbr/10)%2 != 0  && nbr>=60 && nbr<100 && nbr%10<7) {
        return dizaine[parseInt(nbr/10)-1] +'-'+ unite[nbr%10 + 10]
    }
    if (parseInt(nbr/10)%2 != 0  && nbr>=60 && nbr<100 && nbr%10>6) {
        return dizaine[parseInt(nbr/10)-1] +'-'+ 'dix' + '-' + unite[nbr%10]
    }

    if (nbr>=100 && nbr<200) {
        return 'cent'+'-'+ toLetter(nbr%100)
    }
    if (nbr>=200 && nbr<100) {
        return unite[Math.floor(nbr/100)] + '-' + 'cent' +'-'+ toLetter(nbr%100)
    }
    if (nbr>1000) {
        return unite[Math.floor(nbr/1000)] + '-' + 'mille' +'-'+ toLetter(nbr - 1000)
    }
}
display.clickEvent('inc', function incrementer(){
    num.value++
    display.elementShow('lettre', toLetter(num.value))
})
display.clickEvent('dec', function decrementer(){
    num.value--
    display.elementShow('lettre', toLetter(num.value))    
})


// MAJI KA YO :)))


