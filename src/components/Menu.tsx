import React from 'react';
import { IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
  const history = useHistory();

  return (
    <IonMenu contentId="main-content">
      <IonContent>
        <IonList>
          <IonItem button onClick={() => history.push('/home')}>
            <IonLabel>Inicio</IonLabel>
          </IonItem>
          <IonItem button onClick={() => history.push('/reservas')}>
            <IonLabel>Reservas</IonLabel>
          </IonItem>
          <IonItem button onClick={() => history.push('/servicios')}>
            <IonLabel>Servicios</IonLabel>
          </IonItem>
          <IonItem button onClick={() => history.push('/puntos')}>
            <IonLabel>Puntos de Lealtad</IonLabel>
          </IonItem>
          <IonItem button onClick={() => history.push('/perfil')}>
            <IonLabel>Perfil</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
