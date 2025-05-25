const { Subject, ConcreteObserver } = require('./observer');

const berita = new Subject();

const observer1 = new ConcreteObserver("Christian");
const observer2 = new ConcreteObserver("Felix");

berita.attach(observer1);
berita.attach(observer2);

berita.setState("Praktikum Modul 13 dimulai!");

berita.detach(observer2);

berita.setState("Modul 13 selesai dikerjakan!");