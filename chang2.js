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

  function allUserInUS(array) {
      if (Array.isArray(array)) {
        return array.filter( person => person.us === true).map( person => person.name).sort()
      } else {
          return 'not an array'
      }
  }
  function allCodersAbove30(array) {
    if (Array.isArray(array)) {
        return array.sort( (a, b) => (a.age - b.age)).map( person => person.name)
    } else {
        return 'not an array'
    }
  }
  function allFemaleCoders(array) {
    if (Array.isArray(array)) {
        return array.filter( person => (person.gender === 'f' && 
        person.coder === true)).map(person => person.name)
    } else {
        return 'not an array'
    }
  }
  console.log(allUserInUS(newieyork));
  console.log(allCodersAbove30(newieyork));
  console.log(allFemaleCoders(newieyork));
  
  
  