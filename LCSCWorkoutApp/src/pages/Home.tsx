import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonImg } from '@ionic/react';
import React from 'react';





const catImage = 'http://placekitten.com/g/200/300';


console.log(catImage);




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
            {/* <img src="images/Logo_screenDPI-01.png" alt="Gym warrior Logo" className="center" /> */}
            <IonImg className="center" src="http://isoptera.lcsc.edu/~tcherbert/cs480/landing_logo.png" />
        </header>

        <main>
            <section>
                <form>
                  <IonInput type="text" placeholder="Enter Username" name="uname" required />
                  <IonInput type="password" placeholder="Enter Password" name="psw" required />
                  <button type="submit">Login</button>
                </form>
            </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;


