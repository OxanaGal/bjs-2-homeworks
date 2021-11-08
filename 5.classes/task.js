'use strict'

class PrintEditionItem {
   
    constructor(name, releaseDate, pagesCount, state, type){

        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *=  1.5;
        return this.state;
    }

    set state(state){

        this._state = state;

        if(this._state < 0){
            this._state = 0;
        }  if (this._state > 100){
            this._state = 100;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
}

class Library {

    constructor(name, books){

        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){

        for (let key in this.books){

            if (this.books[key][type] === value){
                return this.books[key];
            }
        }

        return null;
    }

    giveBookByName(bookName){

        for(let key in this.books){

            if (this.books[key].name === bookName){

                const givenBook = this.books[key];
                this.books.splice(key, 1);
                return givenBook;
            }
        }
        return null;
    }
}

class Student {

    constructor(name){
        this.name = name;
        this.journal = {};
    }

    addMark(mark, subjectName){

        if(mark >=1 && mark <= 5){
            if(this.journal[subjectName] === undefined){ 
                this.journal[subjectName] = []; 
            }
            
            this.journal[subjectName].push(mark);

        //    return this.journal;
        }
        return `Ошибка, оценка должна быть числом от 1 до 5. Вы пытались поставить оценку ${mark} по предмету ${subjectName}.`
    }

        

    getAverageBySubject(subjectName){

        if(Object.keys(this.journal).includes(subjectName)){

            const sumMarks = this.journal[subjectName].reduce((a, b) => a + b);
  
            return sumMarks / this.journal[subjectName].length;
        }

        return `Несуществующий предмет.`
    }

    getAverage(){
        let sumAllMarks= 0;
        let count = 0;

        for(let subjectName of Object.keys(this.journal)) {
            sumAllMarks += this.journal[subjectName].reduce((a, b) => a + b);
            count += this.journal[subjectName].length;
        }
        
        return sumAllMarks / count

    }

    exclude(reason){
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
    
}
