// Part One
class Vehicle{
  constructor(make,model,year){
    console.log('in class')
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk(){
    return 'Beep'
  }
  toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`

  };
}

// Part Two

class Car extends Vehicle{
  numWheels(){
    return 4;
  }
}

// Part Three
class Motorcycle extends Vehicle{
  numWheels(){
    return 2;
  }
  revEngine(){
    return 'VROOM!!!'
  }
}

// Part Four

class Garage {
  constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
      return 'Only vehicles are allowed in here!';
    }
    if(this.vehicles.length >= this.capacity){
      return "Sorry, we're full"
    }
    this.vehicles.push(newVehicle);
      return 'Vehicle added!'
  } 
}