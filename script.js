const person = {
    name: 'John',
    sayHello: function () {
        return 'Hello ' + this.name
    }
}

console.log(person.sayHello()) //calling sayHello normally

const extractedMethod = person.sayHello()
console.log(extractedMethod)




const calculator = {
    value: 10,
    add: function () {
        return this.value + 5;
    },
    subtract: () => {
        return calculator2.value - 5
        // return calculator.value - 5;
    }
}

const calculator2 = {
    value: 20
}
console.log(calculator.add())
console.log(calculator.subtract())

//Call property

const car = {
    startEngine: function () {
        console.log(`Starting the engine of ${this.brand}`)
    }
}

const bike = {
    brand: 'Harley David Son',
}

car.startEngine.call(bike) //Starting the engine of Harley David Son

const mathOperations = {
    sum : function (val1,val2) {
        console.log(`The sum of '${val1}' and '${val2}' is ${val1 + val2}`)
    }
}

mathOperations.sum.apply({}, [25,36])


const counter = {
    count : 0,
    increment : function(){
        this.count++
        console.log(this.count)
    }
}

const inc = counter.increment.bind(counter)

inc();//1
inc();//2

const timer = {
    name : 'eshwar',
    start: function(){
        setTimeout(() => {
            console.log(`Timer ${this.name} started`)
        },2000)
    }
}

const fun = timer.start.bind(timer)
fun();


//Area of the shapes

const rectangleValues = {
    length : 40,
    width : 30
}

const CircleValues = {
    radius: 3
}

const rectangle = {
    areaOfRectangle : function(){
        console.log(`Area of rectangle ${this.length * this.width}`)
    }
}

const circle = {
    areaOfCircle: function(){
        console.log(`Area of Circle ${3.14 * ((this.radius) ** 2)}`)
    }
}


circle.areaOfCircle.call(CircleValues)
rectangle.areaOfRectangle.call(rectangleValues)
