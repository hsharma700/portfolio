import React, { Component } from "react";
import { arr } from "./Home";
//
class Main extends Component {
  //   constructor(name, age, address, height, weight) {
  //     super();
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //     this.height = height;
  //     this.weight = weight;
  //   }
  render() {
    return (
      <>
        {arr.map((Hello) => {
          return Object.entries(Hello).map(([key, value]) => {
            return (
              <>
                <h1>
                  {key} : {value}
                </h1>
              </>
            );
          });
        })}
      </>
    );
  }
}

export default Main;
