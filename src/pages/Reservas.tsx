import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonButton ,IonImg} from '@ionic/react';
import './Reservas.css';

const Reservas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reservar Habitación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="reservas-content">
        <IonCard>
          <IonCardHeader>
            <IonImg src="suite.jpg" alt="Suite" />
            <IonCardTitle>Habitación Suite - $200/noche</IonCardTitle>
          </IonCardHeader>
          <IonButton expand="full" className="custom-button">Reservar Ahora</IonButton>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonImg src="doble.jpg" alt="Doble" />
            <IonCardTitle>Habitación Doble - $150/noche</IonCardTitle>
          </IonCardHeader>
          <IonButton expand="full" className="custom-button">Reservar Ahora</IonButton>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonImg src="simple.jpg" alt="Simple" />
            <IonCardTitle>Habitación Simple - $50/noche</IonCardTitle>
          </IonCardHeader>
          <IonButton expand="full" className="custom-button">Reservar Ahora</IonButton>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonImg src="economica.jpg" alt="Simple" />
            <IonCardTitle>Habitación Economica - $25/noche</IonCardTitle>
          </IonCardHeader>
          <IonButton expand="full" className="custom-button">Reservar Ahora</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Reservas;
