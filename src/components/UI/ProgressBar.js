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
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  };

  const labelStyles = {
    padding: 10,
    color: "white",
    fontWeight: "bold",
  };

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={wrapper}>
      {name}
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {name}
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
