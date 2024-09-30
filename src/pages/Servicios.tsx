import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import './Servicios.css';

const Servicios: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Servicios Adicionales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="servicios-content">
        <IonList>
          <IonItem className="item-service">
            <IonLabel>Spa - $50</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Restaurante - $30</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Tour Guiado - $15</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Servicio de Transporte - $20</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Membresia VIP - $75</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Entrenador personal gimnasio - $15</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
          <IonItem className="item-service">
            <IonLabel>Servicio Premium Habitación- $30</IonLabel>
            <IonButton slot="end" className="custom-button">Reservar</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Servicios;
