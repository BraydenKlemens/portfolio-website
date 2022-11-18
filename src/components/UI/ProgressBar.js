/*
- Helper component, uses inline styling
- Inline styling enables using props to change the progress percentage and color
*/

const ProgressBar = ({ bgcolor, completed, name }) => {
  const containerStyles = {
    height: 30,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
    marginBottom: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const labelStyles = {
    padding: 10,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      {name}
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <p style={labelStyles}>{name}</p>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
