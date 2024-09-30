import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Luxor App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding login-content">
        <IonItem className="input-item">
          <IonInput placeholder="Usuario" />
        </IonItem>
        <IonItem className="input-item">
          <IonInput placeholder="Contraseña" type="password" />
        </IonItem>
        <IonButton expand="full" onClick={handleLogin} className="custom-button">
          Iniciar Sesión
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
