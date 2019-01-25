var allAnimals = [];



$(document).ready(function(){
    var tigger = new Tiger("Tigger");
    var pooh = new Bear ("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    allAnimals = [tigger,pooh,rarity,gemma,stinger];
    console.log(allAnimals);

    listAnimal();


    //createAnimal function
    $("#addAnimal").click(function(){
            var animal = "";
            var animalValue = $("#species").val();
            var name = $("#animalName").val();
            if (name ==""){
                alert("Please enter a Name");
                return false;
            }

            switch(parseInt(animalValue)){
                case 0:
                    animal =new Tiger(name);
                    break;
                case 1:
                    animal =new Bear(name);
                    break;
                case 2:
                    animal = new Giraffe(name);
                    break;
                case 3:
                    animal = new Unicorn(name);
                    break;
                case 4:
                    animal = new Bee(name);
                    break;

            }

            allAnimals.push(animal);
            $("#feed").append(animal.name + " the " +animal.constructor.name + " has been added to the zoo" + "<br><br>");
            console.log(animal);
            console.log(allAnimals);
            listAnimal();

        });

    //deleteAnimal function

    $("#remove").click(function(){
        var removedAnimal= $("#removeName").val();
        for (var i=0;i<allAnimals.length;i++){
            if(allAnimals[i].name.toLowerCase() == removedAnimal.toLowerCase()){
                //remove that animal from array allAnimals
                allAnimals.splice(i,1);

                $("#feed").append(removedAnimal + " has been released" +
                    " into the wild" + "<br><br>");

            }

        }
        listAnimal();

    });

    //feedAnimals function
    $("#feedAnimals").click(function(){
        var food = $("#favFood").val();
        for(var i=0;i<allAnimals.length;i++){
            allAnimals[i].eat(food);
        }

    })


});

function listAnimal(){
    $("#actions").empty();
    for (var i=0; i<allAnimals.length;i++){
        $("#actions").append(allAnimals[i].name + " the " + allAnimals[i].constructor.name + "<br>"+
            " Favorite Food: " + allAnimals[i].favFood + "<br><br>" );

    }

}

//OOPinaZOOPCode
class  Animal {
    constructor(name,favFood){
        this.name = name;
        this.favFood = favFood;

    }
    sleep() {
        $("#feed").append(this.name + " sleeps for 8 hours"+"<br>");
    }

    eat(food) {


        if (food == this.favFood) {
            $("#feed").append(this.name + " eats " + food + "<br>" + "YUM!! " + this.name + " wants more " + food+"<br>");

        } else {
            $("#feed").append(this.name + " eats " + food +"<br>");
            this.sleep();
        }
    }

}

class Tiger extends Animal {
    constructor(name) {
        super("Tiger");
        this.name = name;
        this.favFood = "meat";
    }
}

class Bear extends Animal{
    constructor(name){
        super("Bear");
        this.name = name;
        this.favFood="fish";
    }
    sleep() {
        $("#feed").append(this.name + " hibernates for 4 months" + "<br>");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super("Unicorn");
        this.name = name;
        this.favFood = "marshmallows";
    }
    sleep(){
        $("#feed").append(this.name + " sleeps in a cloud" + "<br>");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super("Giraffe");
        this.name = name;
        this.favFood = "leaves";
    }

    eat(food) {
        if (food == "leaves") {
            super.eat("leaves");
        } else {
            $("#feed").append("YUCK!! " + this.name + " will not eat " + food + "<br>"+
                this.name + " sleeps for 8 hours"+"<br>");

        }
    }
}

class Bee extends Animal{
    constructor(name){
        super("Bee");
        this.name = name;
        this.favFood = "pollen";
    }
    eat (food) {
        if (food == "pollen") {
            super.eat("pollen");
        } else {
            $("#feed").append("YUCK!! " + this.name + " will not eat " + food + "<br>"+
                this.name + " never sleeps" + "<br>");
        }
    }
}



