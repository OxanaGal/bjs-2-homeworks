'use strict';

function parseCount(value){

    const parsedData = Number.parseInt(value);

    if (isNaN(value)){
        throw new Error ("Невалидное значение")
    }

    return parsedData
}

function validateCount(value){
    
    try {
        return parseCount(value)
    } catch (error) {
        return error
    }

 //   return parseCount(value)
}


class Triangle{

    constructor(a, b, c){

        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a){
            throw new Error ("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter(){
        return this.a + this.b + this.c
    }

    getArea(){
        const semiPerimeter = this.getPerimeter() / 2;
        return +Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(3)
    }

}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует",
        }
    }
}