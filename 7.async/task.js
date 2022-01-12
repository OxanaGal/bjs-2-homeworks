<<<<<<< HEAD
'use strict'

class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id){
        if(id === undefined){
            throw new Error("Параметр id не задан");
        }
        if(this.alarmCollection.some(alarm => alarm.id === id)){
            return console.error(`Звонок с таким id ${id} уже существует`);
        }

        this.alarmCollection.push({id, time, func});
    }

    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
        return true;
    }

    getCurrentFormattedTime(){
        return new Date().toTimeString().substr(0, 5);
    }

    start(){
       const checkClock = alarm => {
           if(alarm.time === getCurrentFormattedTime()){
               alarm.func();
           }
       }
        if(!this.id){
            this.timerId = setInterval(()=> this.alarmCollection.forEach(checkClock), 2000);
        }
    }

    stop(){
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(alarm => console.log(`Будильник с id ${alarm.id} назначен на ${alarm.time}`));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
 /*2*/

function testCase(){
    let alarm = new AlarmClock();
    alarm.addClock("15:00", () => console.log("Порав вставать"), 1);
    alarm.addClock("15:01", () => {console.log("Вставай!"); alarm.removeClock(2)}, 2);
    alarm.addClock("15:02", () => {
        console.log("Ещё минута и можещь уже не торопиттся...");
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.printAlarms();
    alarm.start();
} 

testCase();
=======
'use strict'

class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id){
        if(id === undefined){
            throw new Error("Параметр id не задан");
        }
        if(this.alarmCollection.some(alarm => alarm.id === id)){
            return console.error(`Звонок с таким id ${id} уже существует`);
        }

        this.alarmCollection.push({id, time, func});
    }

    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
        return true;
    }

    getCurrentFormattedTime(){
        return new Date().toTimeString().substr(0, 5);
    }

    start(){
       const checkClock = alarm => {
           if(alarm.time === new Date().toTimeString().substr(0, 5)){
               alarm.func();
           }
       }
        if(!this.id){
            this.timerId = setInterval(()=> this.alarmCollection.forEach(checkClock), 2000);
        }
    }

    stop(){
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(alarm => console.log(`Будильник с id ${alarm.id} назначен на ${alarm.time}`));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
 /*2*/

function testCase(){
    let alarm = new AlarmClock();
    alarm.addClock("15:00", () => console.log("Порав вставать"), 1);
    alarm.addClock("15:01", () => {console.log("Вставай!"); alarm.removeClock(2)}, 2);
    alarm.addClock("15:02", () => {
        console.log("Ещё минута и можещь уже не торопиттся...");
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.printAlarms();
    alarm.start();
} 

testCase();
>>>>>>> 8d9f9c133fffed270cf6b645cb88abe56c66e5f2
