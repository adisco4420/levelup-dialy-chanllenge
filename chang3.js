const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
function totalAgeOfMaleUnder24(array) {
    if (Array.isArray(array)) {
        return array.reduce(((totalAge, person) => ( person.gender === 'm' && 
        person.age < 25 ? totalAge + person.age : totalAge)),0)
    } else {
        return 'not an array'
    }
}
function maleCoderOver30(array) {
    if (Array.isArray(array)) {
        return array.filter( person => person.gender === 'm' && 
                            person.age < 30).map(person => person.name)
    } else {
        return 'not an array'
    }
}
function totalAgeOfAllArray(array1, array2, array3) {
    if (Array.isArray(array1) && Array.isArray(array2) && Array.isArray(array3)) {
        return array1.concat(array2, array3).reduce(((totalAge, person) => totalAge + person.age),0)
    } else {
        return 'not an array'
    }
}
console.log(maleCoderOver30(vegzas));
console.log(totalAgeOfMaleUnder24(vegzas));
console.log(totalAgeOfAllArray(vegzas,texasss,newieyork));


