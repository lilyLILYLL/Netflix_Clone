import React, { useEffect } from "react";
import { Button, CheckBox, TextInput } from "../components";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { SignUpSchema } from "../shared";
import { useSignUpMutation } from "../redux";

export function SignUpForm({ email }: { email: string }) {
    const [signup, { isLoading, isSuccess }] = useSignUpMutation();

    return (
        <div className="w-[500px] h-4/5 min-h-[400px] bg-[rgba(0,0,0,0.6)] p-4 py-8 sm:p-16 rounded-md ">
            <div className="text-3xl font-bold">Sign Up</div>
            {isSuccess ? (
                <div className="mt-10 bg-blue-300 p-3 rounded-lg ">
                    Successfully sign up 🎉!{" "}
                    <Link
                        to="/login"
                        className="cursor-pointer font-bold underline"
                    >
                        Sign in now.
                    </Link>
                </div>
            ) : (
                <>
                    <Formik
                        initialValues={{
                            fullName: "Rose",
                            email: email || "rose@gmail.com",
                            password: "123456",
                            confirmPassword: "123456",
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={() => {}}
                    >
                        {(formik) => {
                            return (
                                <form
                                    className="flex flex-col gap-4 mt-10"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (formik.isValid) {
                                            const { fullName, email, password } =
                                                formik.values;
                                            signup({
                                                fullName,
                                                username: email,
                                                password: password,
                                            });
                                        }
                                    }}
                                >
                                    {/* EMAIL INPUT*/}
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

                                    {/* FULL NAME INPUT*/}
                                    <div>
                                        <TextInput
                                            label="Full Name"
                                            type="fullName"
                                            name="fullName"
                                            id="fullName"
                                            value={formik.values.fullName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.fullName &&
                                            formik.errors.fullName && (
                                                <div className="text-red-500 ml-2 text-sm ">
                                                    {formik.errors.fullName}
                                                </div>
                                            )}
                                    </div>

                                    {/* PASSWORD INPUT*/}
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
                                        {formik.touched.password &&
                                            formik.errors.password && (
                                                <div className="text-red-500 ml-2 text-sm ">
                                                    {formik.errors.password}
                                                </div>
                                            )}
                                    </div>

                                    {/* PASSWORD INPUT*/}
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
                                        isLoading={isLoading}
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
                </>
            )}
        </div>
    );
}
