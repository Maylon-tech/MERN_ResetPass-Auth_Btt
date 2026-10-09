import { User } from "../models/users.js";


export const Register = (req, res) => {
    res.send("Sign Up Page Controller...")

    const { name, email, password } = req.body
}


export const Login = (req, res) => {
    res.send("Login Page Controller...")

    const { email, password } = req.body
}


export const SignOut = (req, res) => {
    res.send("Log Out Page Controller...")
}