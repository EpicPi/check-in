class Event{
    constructor(nome,code){
        this.name = name;
        this.code = code;
        this.attendees = [];
        this.present_attendees = [];
    }
    add(person){
        this.attendees.push(person);
    }
    checkIn(person){
        this.present_attendees.push(person);
    }

}