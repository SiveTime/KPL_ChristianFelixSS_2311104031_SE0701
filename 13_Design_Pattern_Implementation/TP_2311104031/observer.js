class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }

  setState(newState) {
    console.log(`Subject: State berubah ke "${newState}"`);
    this.state = newState;
    this.notify();
  }
}

class ConcreteObserver {
  constructor(nama) {
    this.nama = nama;
  }

  update(state) {
    console.log(`${this.nama} menerima update: ${state}`);
  }
}

module.exports = { Subject, ConcreteObserver };