import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonImg,IonButton } from '@ionic/react';
import React from 'react';
import {Link} from 'react-router-dom';






const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><IonImg className="logo" src="http://isoptera.lcsc.edu/~tcherbert/cs480/gwlogo.png" /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <header>
            <IonImg className="centerLogo" src="./assets/img/landing_logo.png"></IonImg>
        </header>

        <main>
            <section>
                <form>
                  <IonInput type="text" placeholder="Enter Username" name="uname" required />
                  <IonInput type="password" placeholder="Enter Password" name="psw" required />
                  <Link to="/profile"> <button type="submit">Login</button></Link>
                </form>
            </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;


