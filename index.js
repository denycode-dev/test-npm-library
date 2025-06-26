const dateFormat = (date, format) => {
  const options = {};

  if (format.includes("YYYY")) {
    options.year = "numeric";
  }
  if (format.includes("MM")) {
    options.month = "2-digit";
  }
  if (format.includes("DD")) {
    options.day = "2-digit";
  }
  if (format.includes("HH")) {
    options.hour = "2-digit";
    options.hour12 = false;
  }
  if (format.includes("mm")) {
    options.minute = "2-digit";
  }
  if (format.includes("ss")) {
    options.second = "2-digit";
  }

  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export default dateFormat;
