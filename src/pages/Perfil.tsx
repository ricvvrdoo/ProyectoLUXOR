import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { personCircle, mail, call, home, card, cog } from 'ionicons/icons';
import './Perfil.css';

const Perfil: React.FC = () => {
  const puntosLealtad = 2500;
  const nivelLealtad = 'Oro';
  
  const reservas = [
    { id: 1, nombre: 'Suite Presidencial', fecha: '15/09/2023', precio: '500 USD' },
    { id: 2, nombre: 'Habitación Doble', fecha: '10/08/2023', precio: '350 USD' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Sección de Información Personal */}
        <IonCard>
          <IonCardHeader>
            <IonAvatar className="perfil-avatar">
              <IonIcon icon={personCircle} />
            </IonAvatar>
            <IonCardTitle>Maiquel Puma</IonCardTitle>
            <IonCardContent>
              <IonItem>
                <IonIcon icon={mail} slot="start" />
                <IonLabel>m.puma@gmail.com</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={call} slot="start" />
                <IonLabel>+56 9 1234 5678</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={home} slot="start" />
                <IonLabel>Dirección: Av. Balmaceda #892, Santiago</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Programa de Lealtad</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Nivel de Lealtad: <strong>{nivelLealtad}</strong></p>
            <p>Puntos Acumulados: <strong>{puntosLealtad} puntos</strong></p>
            <IonButton expand="full" className="custom-button" routerLink="/puntos">Canjear Puntos</IonButton>
          </IonCardContent>
        </IonCard>

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Historial de Reservas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {reservas.map((reserva) => (
                <IonItem key={reserva.id}>
                  <IonLabel>
                    <h2>{reserva.nombre}</h2>
                    <p>Fecha: {reserva.fecha}</p>
                    <p>Precio: {reserva.precio}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Métodos de Pago</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={card} slot="start" />
              <IonLabel>Visa **** 1234</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={card} slot="start" />
              <IonLabel>MasterCard **** 5678</IonLabel>
            </IonItem>
            <IonButton expand="full" className="custom-button">Agregar Método de Pago</IonButton>
          </IonCardContent>
        </IonCard>

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Configuración</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={cog} slot="start" />
              <IonLabel>Cambiar Contraseña</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={cog} slot="start" />
              <IonLabel>Ajustes de Notificaciones</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;

