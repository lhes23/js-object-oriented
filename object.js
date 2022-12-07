class User {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }
  login() {
    console.log("Login: " + this.name)
  }
  logout() {
    console.log("Logout: " + this.name)
  }
}

const userOne = new User("Fred", 12, "fred@test.com")
const userTwo = new User("Harry", 23, "harry@test.com")

const users = [userOne, userTwo]
