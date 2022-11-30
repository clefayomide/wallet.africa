const TwoGrid = ({ children, gap, className }) => {
  return (
    <div className={`flex ${gap} justify-between items-center ${className}`}>
      {children}
    </div>
  );
};

export default TwoGrid;
