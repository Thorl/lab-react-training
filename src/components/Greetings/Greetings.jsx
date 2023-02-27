import './Greetings.css';

export const Greetings = (props) => {
  let greeting;

  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hej';
  }

  return (
    <div className="greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};
