import React, { useEffect, useState } from "react";
import { Button, CheckBox, TextInput } from "../components";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { Formik, Form } from "formik";
import { AuthenticationSchema } from "../shared";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
    logIn,
    useAppDisptach,
    useAppSelector,
    useLogInMutation,
    type RootState,
} from "../redux";
type SignInFormProps = {
    email?: string;
};

export function SignInForm({ email }: SignInFormProps) {
    const navigate = useNavigate();
    const [logInUser, { data, error, isLoading, isError, isSuccess }] =
        useLogInMutation();
    const dispatch = useAppDisptach();
    const auth = useAppSelector((state: RootState) => state.userSlice);

    const [message, setMessage] = useState("");

    useEffect(() => {
        // sucesss
        if (isSuccess && data) {
            dispatch(logIn(data));
            navigate("/user");
            return;
        }
        // error
        if (isError) {
            setMessage("Invalid Email or Password!");
            return;
        }
    }, [isSuccess, isError]);

    return (
        <div className="w-[500px] h-4/5 bg-[rgba(0,0,0,0.6)] p-4 py-8 sm:p-16 rounded-md ">
            <div className="text-3xl font-bold">Sign In</div>
            {error && <div className="bg-yellow-500 p-2 rounded-md mt-6">{message}</div>}

            {/* {email && !error && (
                <div className="bg-blue-300 p-3 rounded-md mt-6 flex flex-row gap-2 justify-center items-center">
                    <IoIosInformationCircleOutline size={60} />
                    {
                        "It looks like you already have an account. Sign in below to start watching Netflix"
                    }
                </div>
            )} */}
            <Formik
                initialValues={{ username: email || "", password: "" }}
                onSubmit={(values) => {
                    logInUser(values);
                }}
                validationSchema={AuthenticationSchema}
            >
                {(formik) => {
                    console.log(formik.values);
                    return (
                        <Form className="flex flex-col gap-4 mt-6">
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
                                isLoading={isLoading}
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
