function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  // Get day, month, and year
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });

  return `${day} ${month}, ${year}`;
}

export default formatDate;
