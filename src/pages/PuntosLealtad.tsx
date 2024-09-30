import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonList, IonItem, IonChip, IonImg, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';
import Navbar from '../components/Navbar.tsx'; 
import './PuntosLealtad.css'; 

const PuntosLealtad: React.FC = () => {
    const puntos = 2500;
    const historial = [
      { id: 1, descripcion: 'Reserva de habitación', puntos: 500 },
      { id: 2, descripcion: 'Uso de spa', puntos: 200 },
      { id: 3, descripcion: 'Cena en el restaurante', puntos: 300 },
    ];
  
    return (
      <IonPage>
        <Navbar title="Puntos de Lealtad" />
        <IonContent>
          <IonBreadcrumbs>
            <IonBreadcrumb>Puntos de Lealtad</IonBreadcrumb>
            <IonBreadcrumb>Historial</IonBreadcrumb>
          </IonBreadcrumbs>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Puntos Acumulados</IonCardTitle>
              <IonCardSubtitle>{puntos} puntos</IonCardSubtitle>
            </IonCardHeader>
            <IonButton expand="full">Canjear Puntos</IonButton>
          </IonCard>
          <IonList>
          {historial.map((item) => (
            <IonItem key={item.id}>
              <span className="historial-item">{item.descripcion} - {item.puntos} puntos</span> {}
              <IonChip color="primary">Nuevo</IonChip>
            </IonItem>
          ))}
        </IonList>
        </IonContent>
      </IonPage>
    );
  };

export default PuntosLealtad;


