import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav, IonImg } from '@ionic/react';
import React from 'react';
import {faSearch, faBars, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../images/profilePhoto.jpeg';


const Profile: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonTitle><IonImg className="logo" src="http://isoptera.lcsc.edu/~tcherbert/cs480/gwlogo.png" />
                <FontAwesomeIcon className="icon" icon ={faSearch} />
                <FontAwesomeIcon className="icon" icon ={faBars} />
                <FontAwesomeIcon className="icon" icon ={faGrinAlt} />

          </IonTitle>
          </IonToolbar>
          
        </IonHeader>
        <IonContent className="ion-padding">

    <main>
      <div className ="container">
      
      <img className="profile responsive" height='300' alt ="User Profile" src = {profilePic} ></img>
      <IonNav id = "navbar" className="center">
          <ul id ="nav">
              <li id="about">About</li>
              <li id = "photos">Photos</li>
              <li id = "friends">Friends</li>
              <li id = "schedule">Schedule</li>
          </ul>
      </IonNav>
      </div>
    </main>
        </IonContent>
      </IonPage>
    );
  };

export default Profile;