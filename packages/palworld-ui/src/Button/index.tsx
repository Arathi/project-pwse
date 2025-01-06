import "./index.less";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <button className="pwui-button" type="button" onClick={() => onClick()}>
      <div className="pwui-button-background" />
      <div className="pwui-button-content">{children}</div>
      <div className="pwui-button-vertex top left" />
      <div className="pwui-button-vertex top right" />
      <div className="pwui-button-vertex bottom left" />
      <div className="pwui-button-vertex bottom right" />
    </button>
  );
};

export default Button;
