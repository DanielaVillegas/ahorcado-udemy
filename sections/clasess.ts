export class Car {

    readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    private readonly createdAt: number;
     

    constructor ( brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn() {
        if (this.isRunning){
            console.log("El carro ya estaba encendido, se daño el motor");
            return;
        }
        if (this.fuelTank <= 0){
            console.log("El carro no tiene gasolina");

            return;
        }
        this.isRunning = true;
        console.log("El carro esta encendido");
    }

    fillTank( gas: number) {
      if ( gas <=0 ){
        console.log("El gas tiene que ser positivo");
        return;
      }

      let newfuelTank = this.fuelTank + gas;
      if ( newfuelTank >=100){
        this.fuelTank =100;
      } else{
        this.fuelTank = newfuelTank;
      }

    
    }
}

let myMazda = new Car("Mazda", "Sedan");

console.log(myMazda);
myMazda.fillTank(100);
myMazda.fillTank(20);
console.log(myMazda);
myMazda.turnOn();
console.log(myMazda);


