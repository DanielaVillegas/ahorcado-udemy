  

  export let person = {
    name: "Melissa",
    age: 30,
    isAtive: true,
    hobbies:  ["soccer", "baseball"],
    toString(){
        let objetString = this.name + "   " +  this.age;
        console.log(objetString);

    }

  }

  //console.log ( person.name.toUpperCase() );
  //person.toString();


    let car = {
        color: "Azul",
        doors: 5,
        brand: "Toyota",

    }

    let smarTv = {
        model: "Samsung",
        inches: 40,
        price: 450,
    }

    let youtubeVideo = {
       duration: "3 minutos",
       theme: ["Maquillaje", "Outfits", "Perfumes"],
       channel: "Makeup"
    }

    console.log(car);
    console.log(smarTv);
    console.log(youtubeVideo);
