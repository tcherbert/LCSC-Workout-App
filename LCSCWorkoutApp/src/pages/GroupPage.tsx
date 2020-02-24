import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav, IonImg } from '@ionic/react';
import React from 'react';
import {faSearch, faBars, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic2 from '../images/profilePhoto2.jpeg';
import groupProfile from '../images/groupprofile.jpeg';
import { cornflowerblue, white } from 'color-name';
import { url } from 'inspector';


const Group: React.FC = () => {
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
      <div className="profileImage" style={{backgroundImage: "url(" + groupProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '35%' }}>
      <IonCardHeader>
            <IonCardTitle id="nameStatus">Tina's Indoor Cycling CLass</IonCardTitle>
            <IonCardSubtitle id="nameStatus">Monday, Wednesday, Friday at 8 am</IonCardSubtitle>
        </IonCardHeader>
      </div>
    <main>
        <div>
            <IonButton color="lightred">Schedule</IonButton>
        </div>
        <div>
            <IonCard className="profileImage" style={{backgroundImage: "url(" + profilePic2 + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '100%' }}>
                <IonCardHeader>
                    <IonCardSubtitle id="nameStatus">Smart Fitness</IonCardSubtitle>
                    <IonCardTitle id="nameStatus">Sally Jones</IonCardTitle>
                 </IonCardHeader>

             <IonCardContent id="nameStatus">
                Is someone willing to teach me the ropes for Spin? Don't want to look lik a fool!
            </IonCardContent>
            </IonCard>

            <IonCard className="profileImage" style={{backgroundImage: "url(" + groupProfile + ")", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height: '100%' }}>
                 <IonCardHeader>
                    <IonCardTitle id="nameStatus">Tina's Indoor Cycling Class</IonCardTitle>
                 </IonCardHeader>

             <IonCardContent id="nameStatus">
               New music tomorrow! Let's hit some RPMs!
            </IonCardContent>
            </IonCard>
             
        </div>
  
    </main>
    
        </IonContent>
      </IonPage>
    );
  };

export default Group;