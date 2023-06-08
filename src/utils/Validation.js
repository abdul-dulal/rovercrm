import * as Yup from "yup";

export const customerSchema = Yup.object().shape({
  fName: Yup.string().required("First name is required"),
  lName: Yup.string().required("Last name is required"),
});
export const itemSchema = Yup.object().shape({
  item: Yup.string().required("item is required"),
  price: Yup.string().required("Price not zero"),
});
