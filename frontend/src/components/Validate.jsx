export const validateFieldName = (field) => {
  if (field === "") {
    return "This field is required";
  } else if (field.length <= 5 || field.length >= 50) {
    return "This field must be less than 5 characters";
  }
  return true;
};
export const validateFieldCode = (field) => {
  if (field === "") {
    return "This field is required";
  } else if (isNaN(field)) {
    return "This field must be an integer";
  }
  return true;
};
export const validateFieldContinent = (field) => {
  if (field === "") {
    return "This field is required";
  } else if (field.length <= 5 || field.length >= 20) {
    return "This field must be less than 5 characters";
  }
  return true;
};
