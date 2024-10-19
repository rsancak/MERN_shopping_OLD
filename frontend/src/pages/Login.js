import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function LoginComponent(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) =>{
        e.preventDefault();
        try {
            let model = {email: email, password: password};
            let response = await axios.post("http://localhost:5000/auth/login", model);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
        console.log(email, password)
    }

    return(
        <>
        <div className="d-flex justify-content-center" style={{marginTop: "70px"}}>
        <div className="col-md-5">
        <div className="card">
            <div className="card-header">
                <h3>Giriş Yap</h3>
            </div>
            <div className="card-body">
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="email">E-Posta</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="form-control" required/>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Şifre</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="email" className="form-control" required/>
                    </div>
                    <div className="form-group mt-2">
                        <button className="btn btn-primary w-100">Giriş Yap</button>
                        <Link to="/register" className="btn btn-outline-primary w-100 mt-2" style={{float:"right"}}>Üye Ol</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default LoginComponent;