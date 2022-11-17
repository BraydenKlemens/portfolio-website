const ProgressBar = ({ bgcolor, completed, name }) => {
  const containerStyles = {
    height: 25,
    width: "600px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
    marginBottom: 30,
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

  const wrapperStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={wrapperStyles}>
      {name}
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <p style={labelStyles}>{name}</p>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
