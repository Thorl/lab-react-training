import './Random.css';

export const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>
        Random value between {min} and {max} {'=>'} {randomNumber}
      </p>
    </div>
  );
};
