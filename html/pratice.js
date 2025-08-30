const haeseong = {
  name: "yoohaeseong",
  age: 20,
  school: "YenomUniversity",
  major: "smartsofteware",
  graduated: false,

}

let superhero = {
  
  name: ['iron man', 'hulk', 'thor', 'spiderman'],
  hobby: ['eating hamburger', 'breaking stuffs', 'being drunk', 'be kind to neighborhood'],
  sex: ['male', 'male', 'alien', 'radioative person'],
  enemy: {
    thanos: 'he has infiinity guntleret',
    ultron: 'he is an Ai that can control every machines linked with internet',
    Hidra: 'Heil to Hidra',
    suqads: {
      hallyqueen: 'She is crazy but pretty',
      Zoker: 'He is just a sad guy',
      sandman: 'He had to be more stronger',
    }
  }

}

let x = 3;

console.log(haeseong.name, haeseong.graduated);

console.log('Who is this guy? ' + "He is " +superhero.name[x] );
console.log('Who is the enemy? ' + "IT is " + superhero.enemy.thanos);
console.log("Can you guys tell me what superhero does? when they are free? "  + "They usually do this." + superhero.hobby[x]);
console.log("Hey guys? Can you tell me which squad is the worst?" + "It must be this one " + superhero.enemy.suqads.Zoker);


