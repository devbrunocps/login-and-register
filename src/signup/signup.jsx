import './style.css'
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa6";
import usersArr from "../database";
import { useState } from 'react';


let SignUp = () => {
    let [users, setUsers] = useState(usersArr)

    let result = []

    let checkInputs = (input) => {
        if (input.value < 1) {
            input.parentNode.parentNode.children[0].style.display = 'flex'
            if (input.id == 'username') {
                alert("Preencha o campo de usuário!")
            } else if (input.id == 'password') {
                alert("Preencha o campo de senha!")
            } else if (input.id == 'confirm-password') {
                alert("Preencha o campo de confirmação de senha!")
            }
            result.push(false)
        } else {
            input.parentNode.parentNode.children[0].style.display = 'none'
        }
    }

    let checkLogin = (username, password, confirmPassword) => {
        let userExists = checkUserExists(username.value)
        if(userExists.includes(true)) {
            alert("Esse nome de usuário já existe!")
            return
        }

        if(password.value == confirmPassword.value) {
            let newUser = { username: username.value, password: password.value }
            setUsers([...users, newUser])
            alert('Usuário Cadastrado!')
            window.location.href = '/'
        } else {
            alert('As senhas não conferem!')
        }
    }

    let checkUserExists = (username) => {
        return users.map(user => {
            if(user.username === username) {
                return true
            }
        })
    }

    let register = (ev) => {
        let username = document.getElementById('username')
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password')
        ev.preventDefault()
        let inputs = [username, password, confirmPassword]

        result = []
        inputs.forEach(checkInputs)

        if (result.length === 0) {
            checkLogin(username, password, confirmPassword)
        }
    }

    let changeField = (el) => {
        let field = el.target
        if (field.id == "username" && field.value.length > 0) {
            document.getElementById('empty-username').style.display = 'none'
        } else if (field.id == "password" && field.value.length > 0) {
            document.getElementById('empty-password').style.display = 'none'
        } else if (field.id == "confirm-password" && field.value.length > 0) {
            document.getElementById('empty-confirm-password').style.display = 'none'
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

    let showConfirmPassword = () => {
        document.getElementById('confirm-password').type = "text"
        let pshow = document.getElementById('confirm-pshow')
        let phidden = document.getElementById('confirm-phidden')
        pshow.style.display = 'none'
        phidden.style.display = 'flex'
    }

    let hiddenConfirmPassword = () => {
        document.getElementById('confirm-password').type = "password"
        let pshow = document.getElementById('confirm-pshow')
        let phidden = document.getElementById('confirm-phidden')
        pshow.style.display = 'flex'
        phidden.style.display = 'none'
    }


    return (
        <section>
            <div className="container">
                <div className="image">
                    <img src="/images/register-background.png" alt="" />
                </div>
                <form onSubmit={register}>
                    <header className="title">
                        <span>Sign up</span>
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
                        <div className="input-group">
                            <div className="text" id="empty-confirm-password">
                                <span>Fill in this empty field!</span>
                            </div>
                            <div className="field">
                                <div className="icon1">
                                    <FaLock className="icon-password" />
                                </div>
                                <input type="password" name="password" id="confirm-password" placeholder="Confirm Password" onChange={changeField} />
                                <div className="icon">
                                    <BsFillEyeFill id="confirm-phidden" onClick={hiddenConfirmPassword} />
                                    <BsFillEyeSlashFill id="confirm-pshow" onClick={showConfirmPassword} />
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <div className="register">
                                <button type="submit">Sign up</button>
                            </div>
                            <div className="login">
                                <span>Already have an account? <a href="/">Login now</a></span>
                            </div>
                        </div>
                    </main>
                </form>
            </div>
        </section >
    )
}

export default SignUp