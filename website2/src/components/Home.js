import React from 'react'
import Main from './Main'

class Home {
        // super(name, age, address, height, weight)
        constructor(name, age, address, height, weight) {
                this.name = name;
                this.age = age;
                this.address = address;
                this.height = height;
                this.weight = weight;
              }
    }
class Home1 extends Home {
    constructor(name, age, address, height, weight, gender){
        super(name, age, address, height, weight)
        this.gender = gender
    }
}

const Hello1 = new Home1("Himanshu",24,"Pune",5.69,80,"male");
const Hello2 = new Home1("Himanshu1",241,"Pune1",5.69,80,"male1");
export const arr=[Hello1, Hello2];

export default Home

