import * as Yup from "yup";

export const AuthenticationSchema = Yup.object().shape({
    username: Yup.string()
        .email("Please enter a valid email address.")
        .required("Required"),
    password: Yup.string()
        .min(6, "Your password must contain between 6 and 60 characters.")
        .max(60, "Your password must contain between 6 and 60 characters.")
        .required("Required"),
});
export const SignUpSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required!"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm Password is required"),
});

export const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address.")
        .required("This field is required!"),
});
