import {FireBaseConfig} from "../Config/Config";
import firebase from "firebase/app/index";
import 'firebase/database';

export default class Firebase {
    constructor() {
        this.app = firebase.initializeApp(FireBaseConfig);
        this.db = this.app.database().ref('/users');
    }

    login(name, type) {
        let id = null;
        firebase.database().ref('/users').orderByChild('name').equalTo(name).once("value", snapshot => {
            const userData = snapshot.val();
            if (userData) {
                id = Object.keys(snapshot.val())[0];
                console.log(Object.keys(snapshot.val())[0]);
            } else {
                this.db.on('child_added', (data) => {
                    id = data.key;
                    console.log(id);
                });
                this.addPerson({name: name, type: type});
            }
        });
        return id;
    }

    addPerson(person) {
        console.log("added person");
        this.db.push().set({name: person.name, type: person.type}).then(this.db.off('child_added'));
    }

    removeEvent(id) {
        this.db.child(id).remove();
    }
}