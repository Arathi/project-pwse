import "./index.less";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <button className="pwse-button" type="button" onClick={() => onClick()}>
      <div className="pwse-button-background" />
      <div className="pwse-button-content">{children}</div>
      <div className="pwse-button-vertex top left" />
      <div className="pwse-button-vertex top right" />
      <div className="pwse-button-vertex bottom left" />
      <div className="pwse-button-vertex bottom right" />
    </button>
  );
};

export default Button;
