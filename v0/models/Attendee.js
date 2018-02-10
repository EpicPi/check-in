class Attendee{
    constructor(name){
        this.name = name;
        this.events = [];
    }
    signUp(event){
        this.events.push(event);
    }
}