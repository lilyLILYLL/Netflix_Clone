import React from "react";
import { Button, CheckBox, TextInput } from "../components";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { SignUpSchema } from "../shared";

export function SignUpForm() {
    return (
        <div className="w-[500px] h-4/5 bg-[rgba(0,0,0,0.6)] p-4 py-8 sm:p-16 rounded-md ">
            <div className="text-3xl font-bold">Sign Up</div>

            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={SignUpSchema}
            >
                {(formik) => {
                    return (
                        <form
                            className="flex flex-col gap-4 mt-10"
                            onSubmit={formik.handleSubmit}
                        >
                            <div>
                                <TextInput
                                    label="Email or mobile number"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500 ml-2 text-sm ">
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>

                            <div>
                                <TextInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-red-500 ml-2 text-sm ">
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div>
                            <div>
                                <TextInput
                                    label="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword && (
                                        <div className="text-red-500 ml-2 text-sm ">
                                            {formik.errors.confirmPassword}
                                        </div>
                                    )}
                            </div>

                            <Button
                                label="Sign up"
                                primary
                                className="w-full"
                                type="submit"
                            />
                        </form>
                    );
                }}
            </Formik>

            <CheckBox
                label="Remember me"
                checked
            />
            <div className="mt-10">
                Already have an account{" "}
                <Link
                    to="/login"
                    className="cursor-pointer font-bold"
                >
                    Sign in now.
                </Link>
            </div>
        </div>
    );
}
