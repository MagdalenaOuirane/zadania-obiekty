const book = {
  users: [],

  addUser(name, age, phone) {
    this.users.push({ name, age, phone });
    console.log(this.users)
  },

  showUsers() {
    console.log(`Wszyscy uzytkownicy w ksiazce `);
    this.users.forEach((element) => {
      console.log(element);
    });
  },

  findByName(name) {
    return this.users.find((element) => element.name === name);
  },

  findByPhone(phone) {
    return this.users.find((element) => element.phone === phone);
  },

  getCount() {
    return this.users.length;
  },
};



book.addUser('Aga', 20, '763748234');
book.addUser('Laura', 25, '763734294');
book.addUser('Ania', 28, '760748231');
book.addUser('Edyta', 30, '753708214');
console.log(book.showUsers())
console.log('User with this name:', book.findByName('Edyta'));
console.log('User with this phone number:', book.findByPhone('763734294'));
console.log('Number of users:', book.getCount());