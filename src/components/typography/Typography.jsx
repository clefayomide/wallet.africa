export const Heading = ({ text, size, color }) => {
  return <h3 className={`${size} ${color} font-Playfair font-medium lg:font-semibold`}>{text}</h3>;
};

export const Paragraph = ({text, size, color}) => {
  return <p className={`${size} font-IBM ${color}`}>{text}</p>
}
