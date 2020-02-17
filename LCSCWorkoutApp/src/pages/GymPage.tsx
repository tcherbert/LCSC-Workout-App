import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav, IonImg } from '@ionic/react';
import React from 'react';
import {faSearch, faBars, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../images/profilePhoto.jpeg';
import gymProfile from '../images/gymprofile.jpeg';
import { cornflowerblue, white } from 'color-name';
import { url } from 'inspector';


const Gym: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonTitle><IonImg className="logo" src="http://isoptera.lcsc.edu/~tcherbert/cs480/gwlogo.png" />
                <FontAwesomeIcon className="icon" icon ={faBars} />
                <FontAwesomeIcon className="icon" icon ={faGrinAlt} />
                <FontAwesomeIcon className="icon" icon ={faSearch} />
                

          </IonTitle>
          </IonToolbar>
          
        </IonHeader>
        <IonContent>
      <div className="profileImage" style={{backgroundImage: "url(" + gymProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '35%' }}>
      <IonCardHeader>
            <IonCardTitle id="nameStatus">Smart Fitness</IonCardTitle>
            <IonCardSubtitle id="nameStatus">1234 Street, City 555-555-5555</IonCardSubtitle>
        </IonCardHeader>
      </div>
    <main>
        <div>
            <IonButton color="lightred">Message</IonButton>
            <IonButton color="darkred">Photos</IonButton>
            <IonButton color="lightred">Schedule</IonButton>
        </div>
        <div>
            <IonCard className="profileImage" style={{backgroundImage: "url(" + gymProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '100%' }}>
                <IonCardHeader>
                    <IonCardTitle id="nameStatus">Smart Fitness</IonCardTitle>
                 </IonCardHeader>

             <IonCardContent id="nameStatus">
                We just released a new class schedule! Check it out!
            </IonCardContent>
            </IonCard>

            <IonCard className="profileImage" style={{backgroundImage: "url(" + gymProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '100%' }}>
                 <IonCardHeader>
                    <IonCardTitle id="nameStatus">Smart Fitness</IonCardTitle>
                 </IonCardHeader>

             <IonCardContent id="nameStatus">
               Personal training special! Now through March 1 all of our personal training sessions are 50% off!
            </IonCardContent>
            </IonCard>

            <IonCard className="profileImage" style={{backgroundImage: "url(" + gymProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '100%' }}>
                 <IonCardHeader>
                    <IonCardTitle id="nameStatus">Smart Fitness</IonCardTitle>
                 </IonCardHeader>

             <IonCardContent id="nameStatus">
               It's a great day for a great day!
            </IonCardContent>
            </IonCard>
             
        </div>
  
    </main>
    
        </IonContent>
      </IonPage>
    );
  };

export default Gym;