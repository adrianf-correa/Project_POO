"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
exports.default = Person;
