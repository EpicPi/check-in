class Host{
    constructor(name){
        this.name = name;
        this.events = [];
    }
    create(event){
        this.events.push(event);
    }
}