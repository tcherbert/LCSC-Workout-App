import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav, IonImg } from '@ionic/react';
import React from 'react';
import {faSearch, faBars, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../images/profilePhoto.jpeg';
import { cornflowerblue } from 'color-name';



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
        <IonContent>
      <div className="profileImage" style={{backgroundImage: "url(" + profilePic + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '50%', maxHeight: '50%' }}>
    
    </div>
    <main>
      
       
      
     
    
        <IonButton color="lightred">About</IonButton>
        <IonButton color="darkred">Photos</IonButton>
        <IonButton color="lightred">Friends</IonButton>
        <IonButton color="darkred">Schedule</IonButton>
          
  
  
    </main>
    
        </IonContent>
      </IonPage>
    );
  };

export default Profile;