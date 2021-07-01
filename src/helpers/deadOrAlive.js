export const deadOrAlive = i => {
  if (i === "Alive") {
    return "image__overlay alive";
  } else if (i === "Deceased") {
    return "image__overlay dead";
  } else {
    return "image__overlay";
  }
};
