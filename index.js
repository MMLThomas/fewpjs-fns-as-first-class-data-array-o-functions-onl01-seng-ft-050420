function wakeDog(dogName, dogBreed) {
    let a = `Wake ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }
  
  function leashDog(dogName, dogBreed) {
    let a = `Leash ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function walkToPark(dogName, dogBreed) {
    let a = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function throwFrisbee(dogName, dogBreed) {
    let a = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
    
  }

  function walkHome(dogName, dogBreed) {
    let a = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }

  function unleashDog(dogName, dogBreed) {
    let a = `Unleash ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
  }


let routine = [
<<<<<<< HEAD
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
=======
  function wakeDog(dogName, dogBreed),
  
  function leashDog(dogName, dogBreed),

  function walkToPark(dogName, dogBreed),

  function throwFrisbee(dogName, dogBreed),

  function walkHome(dogName, dogBreed),

  function unleashDog(dogName, dogBreed)
>>>>>>> 6706c24f378decdc19e0eca013944e352c3293db
  ]
  
  function exerciseDog(dogName, dogBreed){
    let new_array = []
<<<<<<< HEAD
    for(let i=0; i < routine.length; i++){
      new_array += routine[i](dogName, dogBreed);
=======
    for(i=0; i < routine.length; i++){
      new_array.append(routine[i](dogName, dogBreed));
>>>>>>> 6706c24f378decdc19e0eca013944e352c3293db
    }
    return new_array
  }