import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';
import { BoxColor } from './components/BoxColor/BoxColor';

function App() {
  const users = [
    {
      _id: 1102938,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      height: '180cm',
      birthDate: '1973-04-14',
      picture: 'https://randomuser.me/api/portraits/men/26.jpg',
    },
    {
      _id: 123093,
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'female',
      height: '168cm',
      birthDate: '1999-11-29',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ];
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <IdCard
            key={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
            gender={user.gender}
            height={user.height}
            birthDate={user.birthDate}
            picture={user.picture}
          />
        );
      })}
      <Greetings lang="es">Thor</Greetings>
      <Greetings lang="fr">Emil</Greetings>
      <Random min={1} max={3} />
      <BoxColor r={50} g={150} b={100} />
      <BoxColor r={137} g={29} b={192} />
    </div>
  );
}

export default App;
