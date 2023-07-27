class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "beep"
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor (capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    add(vehicle) {
        if (this.vehicles.length < this.capacity) {
            if (vehicle instanceof Vehicle) {
                this.vehicles[this.vehicles.length] = vehicle
                return "Vehicle added!"
            }
            else {
                return 'Only vehicles are allowed in here'
            }
        }
        else {
            return "Sorry, we're full"
        }
        
    }
    
}