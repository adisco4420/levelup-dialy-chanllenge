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
  function userAbove24(array) {
      if (Array.isArray(array)) {
        return  array.filter(person => (person.age > 24)).map(person => person.name)
      } else {
        return 'not an array'
      }
  }
  function totalAgeOfAllUsers(array) {
    if (Array.isArray(array)) {
      return array.reduce( ((totalAge, person) => (totalAge + person.age)),0) 
    } else {
      return 'not an array'
    }
  }
  function getAllFemaleCoders(array) {
    if (Array.isArray(array)) {
      return array.filter(person => (person.gender === 'f')).map( person => person.name) 
    } else {
      return 'not an array'
    }
  }
  console.log(userAbove24(texasss));
  console.log(totalAgeOfAllUsers(texasss));
  console.log(getAllFemaleCoders(texasss));
  