class User {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }
  login() {
    console.log("Login: " + this.name)
    return this
  }
  logout() {
    console.log("Logout: " + this.name)
    return this
  }
}

class Admin extends User {
  deleteUser(user) {
    return (users = users.filter((u) => u.email != user.email))
  }
}

const userOne = new User("Fred", 12, "fred@test.com")
const userTwo = new User("Harry", 23, "harry@test.com")
const admin = new Admin("Her", 25, "her@test.com")

let users = [userOne, userTwo, admin]
