import { useState } from "react";
import './style.css'
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa6";
import usersArr from "../database";

let SignIn = () => {
    let [users, setUsers] = useState(usersArr )
    
    let result = [];

    let checkInputs = (input) => {
        if (input.value < 1) {
            input.parentNode.parentNode.children[0].style.display = 'flex'
            if(input.id == 'username') {
                alert("Preencha o campo de usuário!")
            } else if(input.id == 'password') {
                alert("Preencha o campo de senha!")
            }
            result.push(false)
        } else {
            input.parentNode.parentNode.children[0].style.display = 'none'
        }
    }

    let checkLogin = (username, password) => {
        let validUser = 0
        users.forEach(user => {
            if (user.username == username.value && user.password == password.value) {
                validUser += 1
                return
            }
        })

        validUser > 0 ? window.location.href = "thanks-signin" : alert('Usuário e/ou senha incorreto(s)!')
    }

    let changeField = (el) => {
        let field = el.target
        if (field.id == "username" && field.value.length > 0) {
            document.getElementById('empty-username').style.display = 'none'
        } else if (field.id == "password" && field.value.length > 0) {
            document.getElementById('empty-password').style.display = 'none'
        }
    }

    let login = (ev) => {
        let username = document.getElementById('username')
        let password = document.getElementById('password')
        ev.preventDefault()
        let inputs = [username, password]

        result = []
        inputs.forEach(checkInputs)

        if (result.length === 0) {
            checkLogin(username, password)
        }
    }

    let showPassword = () => {
        document.getElementById('password').type = "text"
        let pshow = document.getElementById('pshow')
        let phidden = document.getElementById('phidden')
        pshow.style.display = 'none'
        phidden.style.display = 'flex'
    }

    let hiddenPassword = () => {
        document.getElementById('password').type = "password"
        let pshow = document.getElementById('pshow')
        let phidden = document.getElementById('phidden')
        pshow.style.display = 'flex'
        phidden.style.display = 'none'
    }

    return (
        <section>
            <div className="container">
                <div className="image">
                    <img src="/images/login-background.png" alt="" />
                </div>
                <form onSubmit={login}>
                    <header className="title">
                        <span>Sign In</span>
                    </header>
                    <main>
                        <div className="input-group">
                            <div className="text" id="empty-username">
                                <span>Fill in this empty field!</span>
                            </div>
                            <div className="field">
                                <div className="icon1">
                                    <FaUser className="icon-user" />
                                </div>
                                <input type="text" name="username" id="username" placeholder="Username or email" autoComplete="off" onChange={changeField} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="text" id="empty-password">
                                <span>Fill in this empty field!</span>
                            </div>
                            <div className="field">
                                <div className="icon1">
                                    <FaLock className="icon-password" />
                                </div>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={changeField} />
                                <div className="icon">
                                    <BsFillEyeFill id="phidden" onClick={hiddenPassword} />
                                    <BsFillEyeSlashFill id="pshow" onClick={showPassword} />
                                </div>
                            </div>
                        </div>

                        <div className="btns">
                            <div className="btns1">
                                <div className="check">
                                    <input type="checkbox" name="check" id="check" />
                                    <label htmlFor="check">Remember me</label>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="login">
                                <button type="submit">Sign In</button>
                            </div>
                            <div className="register">
                                <span>New here? <a href="/register">Create an Account</a></span>
                            </div>
                        </div>
                    </main>
                </form>
            </div>
        </section >
    )
}

export default SignIn