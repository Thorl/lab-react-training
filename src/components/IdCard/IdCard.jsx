import './IdCard.css';

export const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birthDate,
  picture,
}) => {
  return (
    <div className="idCardContainer">
      <img src={picture} alt="" className="idCardContainer__img" />
      <div className="idCardContainer__personalInfo">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong> Gender:</strong> {gender}
        </p>
        <p>
          <strong> Height:</strong> {height}
        </p>
        <p>
          <strong> Birth date:</strong> {birthDate}
        </p>
      </div>
    </div>
  );
};
