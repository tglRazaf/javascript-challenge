let listLogin = []

function login(user){
    listLogin.push(user)

}

class user {
    constructor(name, email){
        this.name = name
        this.email = email
        this.position = {
            x: 200,
            y: 300
        }
    }
    isLogged(){
        for (let i = 0; i < listLogin.length; i++) {
            if (listLogin[i] == this.name) {
                console.log(this.name +' is connected')
                break
            } else{
                console.log('no user find ')
            }
        }
        
    }
}

const userOne = new user('stephano', 'stephano@email.com')
const userTwo = new user('naruto', 'naruto@hinata.com')


// compteur en javascript
let i = 0, j = 0, k = 0
let date = new Date()
let isStarted = false
let timeInterval = function(){}

const display = {
    elementShow: function(id, affichage){
        document.getElementById(id).innerHTML = affichage;
    },
    clickEvent: function(id, functions){
        document.getElementById(id).addEventListener('click', functions)
    }
}

// function to display the time interval
function displayTime(){
    i++
    date.setSeconds(i)
    display.elementShow('seconds', date.getSeconds())
    if (i == 60) {
        j++ 
        i = 0      
        date.setMinutes(j)
        display.elementShow('minutes', date.getMinutes() + ' :')
        if (j == 60) {
            k++
            j = 0
            date.setHours(k)
            display.elementShow('hours', date.getHours() + ' :')
        }
    } 
}

//start the chrono 
display.clickEvent('start', startTime)
function startTime(){
    isStarted = true
    if (isStarted) {
        timeInterval = setInterval(displayTime, 1000)
    }
    
}

// make the chrono to pause
display.clickEvent('pause', pauseTime)
function pauseTime(){
    isStarted = false
    clearInterval(timeInterval)
}

//reset the intervaltime to 0
display.clickEvent('reset', resetTime)
function resetTime(){
    pauseTime()
    i = 0
    j = 0
    k = 0
    display.elementShow('hours', '0 :')
    display.elementShow('minutes', '0 :')
    display.elementShow('seconds', '0')
}