import {FireBaseConfig} from "../Config/Config";
import firebase from "firebase/app/index";
import 'firebase/database';
import cookie from 'react-cookies';

export default class Firebase {
    constructor() {
        this.app = firebase.initializeApp(FireBaseConfig);
        this.useresDB = this.app.database().ref('/users');
        this.eventsDB = this.app.database().ref('/events');
        this.cookie = cookie;
    }

    login(name, type) {
        firebase.database().ref('/users').orderByChild('name').equalTo(name).once("value", snapshot => {
            const userData = snapshot.val();
            if (userData) {
                var id = Object.keys(snapshot.val())[0];
                this.cookie.save("id",id,{ path: '/' });
            } else {
                var newUserRef = this.useresDB.push();
                this.cookie.save('id',newUserRef.path.pieces_[1])
                newUserRef.set({name: name, type: type});
            }
        }).then(this.setUpEvents());
    }
    setUpEvents(){
        // this.app.database().ref('/users').child('/'+cookie.load('id')+'/events')
        //     .on('value',(snapshot)=> console.log(snapshot));
        return null;
    }

    addEvent(event){
        console.log("adding");
        var newPostRef = this.eventsDB.push();
        let newEventId = newPostRef.path.pieces_[1];
        this.useresDB.child('/'+cookie.load('id')+'/events').push({
            eventid: newEventId,
            name: event.name,
            code: event.code
        });
        newPostRef.set({
            name: event.name,
            code: event.code
        });

    }
    removeEvent(id) {
        this.useresDB.child(id).remove();
    }

}