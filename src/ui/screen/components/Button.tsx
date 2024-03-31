interface ButtonI {
  name: string;
  onClick: () => void;
}

export default function Button(props: ButtonI) {
  const { name, onClick } = props;
  return (
    <button className="btn btn-outline" onClick={onClick}>
      {name}
    </button>
  );
}
