import React from "react";
import { Button, CheckBox, TextInput } from "../components";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { AuthenticationSchema } from "../shared";

export function SignInForm() {
    return (
        <div className="w-[500px] h-4/5 bg-[rgba(0,0,0,0.6)] p-4 py-8 sm:p-16 rounded-md ">
            <div className="text-3xl font-bold">Sign In</div>

            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={AuthenticationSchema}
            >
                {(formik) => {
                    return (
                        <Form className="flex flex-col gap-4 mt-10">
                            <div>
                                <TextInput
                                    label="Email or mobile number"
                                    type="username"
                                    name="username"
                                    id="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.username && formik.errors.username && (
                                    <div className="text-red-500 ml-2 text-sm ">
                                        {formik.errors.username}
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

                            <Button
                                label="Sign in"
                                primary
                                className="w-full"
                                type="submit"
                            />
                        </Form>
                    );
                }}
            </Formik>

            <Button
                label="Forgot Password"
                underline
                className="mt-4"
            />
            <CheckBox
                label="Remember me"
                checked
            />
            <div>
                New to Netflix?{" "}
                <Link
                    to="/"
                    className="cursor-pointer font-bold"
                >
                    Sign up now.
                </Link>
            </div>
        </div>
    );
}
