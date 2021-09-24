// const timerProto = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
    timeItems: document.querySelectorAll('.value'),
    daysValue: document.querySelector('span[data-value="days"]'),
    hoursValue: document.querySelector('span[data-value="hours"]'),
    minsValue: document.querySelector('span[data-value="mins"]'),
    secsValue: document.querySelector('span[data-value="secs"]')
}



const timer = {

    start() {
        const targetDate = Date.parse('Oct 24, 2021 ')
          
     const  timerID = setInterval(() => {
       
        const nowTime = Date.now()
        const diffTime = targetDate - nowTime  
        console.log(" time");

            const timeResult = getTime(diffTime)
            refs.daysValue.textContent = `${timeResult.days} `
            refs.hoursValue.textContent = `${timeResult.hours} `
            refs.minsValue.textContent = `${timeResult.mins} `
            refs.secsValue.textContent = `${timeResult.secs} `

            if(diffTime < 0){
                clearInterval(timerID)
                refs.timeItems.forEach(item=>item.textContent = 0)
               

            }
            


        },1000)

    },

    
    
   

}
timer.start()




function getTime(time){
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days,hours,mins,secs}

}
    
function pad(value) {
    return String(value).padStart(2, '0')
}