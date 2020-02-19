import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonImg } from '@ionic/react';
import React from 'react';
import {Link} from 'react-router-dom';

class NameForm extends React.Component <{}, { password: string, email: string }> {
  
  constructor(props:any) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event:any) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event:any) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event:any) {
    console.log(this.state);
    event.preventDefault();

    var xhttp = new XMLHttpRequest();
			xhttp.open("POST", "http://isoptera.lcsc.edu/~tcherbert/lcsc_workout_app/includes/process_login.php", true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
			xhttp.send('password=' + this.state.password + '&email=' + this.state.email);
			
			xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
			      console.log(this.responseText);
			      
			      var returnedJSON = JSON.parse(this.responseText);
			      console.log(returnedJSON.message);
            
            if(returnedJSON.message == 1){

            }      
			    }
			 };	
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <IonInput onIonChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Enter Username" name="email" required />
        <IonInput onIonChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Login</button>
      </form>
    );
  }
}





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
                <NameForm />
                
                {/* <form>
                  <IonInput type="text" placeholder="Enter Username" name="uname" required />
                  <IonInput type="password" placeholder="Enter Password" name="psw" required />
                  <Link to="/profile"> <button type="submit">Login</button></Link>
                </form> */}
            </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;


