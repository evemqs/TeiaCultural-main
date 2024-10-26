import "./button.css";

function Button({ title }) {

  return (
    <button className="button-template">
      {title}
    </button>
  );
}


export default Button;