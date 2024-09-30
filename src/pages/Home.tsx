import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a Luxor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-content">
        <div className="welcome-section">
          <h1>Experiencia de Lujo</h1>
          <p>Descubre nuestros servicios y disfruta de un hotel 5 estrellas.</p>
        </div>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonImg src="/hotel.jpeg" alt="Habitación" />
                <IonCardHeader>
                  <IonCardTitle>Reservar Habitación</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="full" onClick={() => history.push('/reservas')} className="custom-button">
                    Reservar Ahora
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonImg src="/spa.jpeg" alt="Servicios" />
                <IonCardHeader>
                  <IonCardTitle>Servicios Adicionales</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="full" onClick={() => history.push('/servicios')} className="custom-button">
                    Ver Servicios
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonImg src="/puntos.png" alt="Puntos" />
                <IonCardHeader>
                  <IonCardTitle>Puntos de Lealtad</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="full" onClick={() => history.push('/puntos')} className="custom-button">
                    Ver Puntos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonImg src="/perfil.png" alt="Perfil" />
                <IonCardHeader>
                  <IonCardTitle>Ver Perfil</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="full" onClick={() => history.push('/perfil')} className="custom-button">
                    Acceder al Perfil
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

