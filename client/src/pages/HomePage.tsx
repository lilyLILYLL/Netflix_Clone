import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { Button, TextInput, Accordion } from "../components";
import { netflixFAQs, emailSchema } from "../shared";
import { Formik, type FormikProps } from "formik";
import { useLazyCheckifUserExistQuery } from "../redux";

export function HomePage() {
    const navigate = useNavigate();
    const [checkIfUserExist, { isLoading }] = useLazyCheckifUserExistQuery();

    const handleCheckIfUserExist = async (formik: FormikProps<{ email: string }>) => {
        const { email } = formik.values;
        const result = await checkIfUserExist(email);
        // navigate to the coresponding page based on the email
        navigate(result.data?.existing ? "/login" : "/signup", {
            state: { email },
        });
    };

    return (
        <div className="bg-[#000] background-image w-full min-h-screen flex justify-center ">
            <div className=" w-[80%]">
                <img
                    src={Logo}
                    className="w-[100px] md:w-[150px] absolute top-10 translate-x-[20px] md:translate-x-[100px] duration-200 ease-linear transition-transform"
                />
                <Link to="/login">
                    <Button
                        label="Sign in"
                        primary
                        className="w-fit absolute top-8 right-8 sm:right-20 px-6"
                    />
                </Link>

                {/* Welcome section*/}
                <div className=" flex flex-col justify-center items-center h-screen  ">
                    <div className="w-[350px] sm:w-[90%] md:w-[80%] lg:w-[60%] h-3/4  flex flex-col justify-center gap-8 ">
                        <div className="font-bold text-5xl text-center">
                            Unlimited movies, TV shows and more
                        </div>
                        <div className="text-center font-bold">
                            Starts at $9.99. Cancel at any time.
                        </div>
                        <div className="text-center font-bold">
                            Ready to watch Netflix? Enter your email to create or restart
                            your membership.
                        </div>

                        <Formik
                            initialValues={{ email: "test@gmail.com" }}
                            onSubmit={(values) => console.log(values)}
                            validationSchema={emailSchema}
                        >
                            {(formik) => {
                                return (
                                    <form
                                        className="flex flex-col sm:flex-row gap-2 justify-center  items-center sm:items-stretch"
                                        onSubmit={(e) => {
                                            e.preventDefault();

                                            if (
                                                !formik.values.email &&
                                                !formik.touched.email
                                            )
                                                formik.setErrors({
                                                    email: "Email is required",
                                                });

                                            if (
                                                !formik.errors.email &&
                                                formik.values.email
                                            ) {
                                                handleCheckIfUserExist(formik);
                                            }
                                        }}
                                    >
                                        <div className="flex flex-col gap-2">
                                            <TextInput
                                                label="Email Address"
                                                className="min-w-[300px]"
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.email && (
                                                <div className="text-red-500 ml-2 text-sm ">
                                                    {formik.errors.email}
                                                </div>
                                            )}
                                        </div>

                                        <Button
                                            label="Get Started >"
                                            primary
                                            className="m-1 font-bold h-[65px] min-w-[100px]"
                                            type="submit"
                                            isLoading={isLoading}
                                        />
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>

                {/* frequently asked questions */}

                <Accordion items={netflixFAQs} />
            </div>
        </div>
    );
}
