interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
  async loadDog(id:number):Dog{
    return await (await fetch('demoUrl')).json() as Dog;
  }
}


class DogRecord implements Dog{
    id:number
    name:string
    age:number
    description:string

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id:number):DogRecord{
        return dog
    }

    save() {
        // code to save dog to database
    }
}