function getWordCloudStyle(frequency) {
  let style = {
    fontSize: "1.1em",
    color: "#999",
  };
  if (frequency > 0 && frequency <= 3) {
    style = {
      fontSize: "1.1em",
      color: "#999",
    };
  } else if (frequency > 4 && frequency <= 8) {
    style = {
      fontSize: "1.1em",
      color: "#999",
    };
  } else if (frequency > 8 && frequency <= 11) {
    style = {
      fontSize: "1.17em",
      color: "#999c9f",
    };
  } else if (frequency > 17 && frequency <= 19) {
    style = {
      fontSize: "1.23em",
      color: "#999ea6",
    };
  } else if (frequency > 19 && frequency <= 23) {
    style = {
      fontSize: "1.43em",
      color: "#99a6b9",
    };
  } else if (frequency > 23) {
    style = {
      fontSize: "1.5em",
      color: "#99a9bf",
    };
  }
  return style;
}

export default getWordCloudStyle;
