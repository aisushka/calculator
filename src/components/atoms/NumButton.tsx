interface Props {
  num: string;
}
const NumButton = ({ num }: Props) => {
  return (
    <button
      style={{
        padding: "8px",
        color: "black",
        width: "60px",
        height: "60px",
        "&:hover": {
          background: "#efefef",
        },
      }}
    >
      {num}
    </button>
  );
};

export default NumButton;
