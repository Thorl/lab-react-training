import './BoxColor.css';

export const BoxColor = ({ r, g, b }) => {
  const numberToHex = (num) => {
    const hex = num.toString(16);

    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (red, green, blue) => {
    return '#' + numberToHex(r) + numberToHex(g) + numberToHex(b);
  };

  const rgbColor = rgbToHex(r, g, b);

  const boxBackgroundColor = {
    backgroundColor: `rgba(${r},${g},${b},1)`,
  };

  return (
    <div className="boxColor" style={boxBackgroundColor}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbColor}</p>
    </div>
  );
};
