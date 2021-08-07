

const categories = (() => {

    const animals = {
        alligator: "../src/images/animals/alligator.png",
        bird: "../src/images/animals/bird.png",
        butterfly: "../src/images/animals/butterfly.png",
        cat: "../src/images/animals/cat.png",
        dog: "../src/images/animals/dog.png",
        elephant: "../src/images/animals/elephant.png",
        fish: "../src/images/animals/fish.png",
        snake: "../src/images/animals/snake.png",
        zebra: "../src/images/animals/zebra.png"
    };

/*     const animals = {
        1: "What reptile has no legs and likes to live under rocks?",
        2: "What insect starts as a caterpillar and changes into something beautiful?",
        3: "What mammal uses sound to find food when it flies at night?",
        4: "What bird is black and white and can swim but can't fly?",
        5: "What amphibian looks similar to a lizard but likes to live in wet places?",
        6: "What fish can get really big like a ball and has spines to protect itself?",
        7: "What mammal is the largest animal in the world?",
        8: "What reptile has a hard shell where it can hide its head and legs inside?",
        9: "What bird can stand on one leg and is a special color from the food it eats?"
    }; */

    const foods = {
        hamburger: "../src/images/foods/hamburger.png",
        bread: "../src/images/foods/bread.png",
        chocolate: "../src/images/foods/chocolate.png",
        fish: "../src/images/foods/fish.png",
        "ice cream": "../src/images/foods/icecream.png",
        pizza: "../src/images/foods/pizza.png",
        potatoes: "../src/images/foods/potatoes.png",
        rice: "../src/images/foods/rice.png",
        soup: "../src/images/foods/soup.png"
    };

/*     const foods = {
        1: "What fruit has the same name as its color?",
        2: "What Italian food is shaped like a circle and can have many different toppings?",
        3: "What vegetable grows under the ground and has a brown skin but is white underneath?",
        4: "What food is grown in paddies where a lot of water is needed to get the white seeds that we can cook and eat?",
        5: "What drink is popular for adults who want to wake up and have more energy?",
        6: "What vegetable can be made into a delicious pie and carved into a scary face?",
        7: "What fruit is red, grows on the ground, and has hundreds of tiny white seeds?",
        8: "What kind of nut can be made into a creamy butter to put on your sandwhich?",
        9: "What drink is made from the leaves of a tree and is very popular in England?"
    }; */

    const places = {
        classroom: "../src/images/places/classroom.png",
        bakery: "../src/images/places/bakery.png",
        beach: "../src/images/places/beach.png",
        home: "../src/images/places/home.png",
        hospital: "../src/images/places/hospital.png",
        park: "../src/images/places/park.png",
        "police station": "../src/images/places/policestation.png",
        supermarket: "../src/images/places/supermarket.png",
        toystore: "../src/images/places/toystore.png"
    };

/*     const places = {
        1: "Where can you read lots of books in a quiet place?",
        2: "Where can you sit and watch a new movie and eat popcorn?",
        3: "Where can you go if you get hurt and need to talk to a doctor?",
        4: "Where can you go if you need to mail a letter or send a package?",
        5: "Where can you go if you want to buy some fresh baked bread?",
        6: "Where can you go shopping for lots of fruit and vegetables and other foods?",
        7: "Where can you go to play outside and fly a kite or walk your dog?",
        8: "Where do you go to learn about many things and see your friends every day?",
        9: "Where can you go to buy some tools and materials like a hammar and nails and paint?"
    };
 */

    return {
        animals,
        foods,
        places

    };
})();
  
  
  export {
    categories
  }
