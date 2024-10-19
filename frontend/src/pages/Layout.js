import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LayoutComponent() {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        navigate("/login");
        localStorage.removeItem("user")
    }

    const login = () => {
        navigate("/login");
    }

    const signin = () => {
        navigate("/register");
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="p-4 text-center"><span className="alert alert-danger">Tüm alanlar kullanılabilir. Üyelik ve Admin devre dışı!</span></div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg style={{ zoom: '0.7' }} xmlns="http://www.w3.org/2000/svg" width="64" height="64" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" fill="#FF5900" d="M20 34a2 2 0 1 1-3.999.001A2 2 0 0 1 20 34zm12 30a31.84 31.84 0 0 1-12.55-2.579A5.99 5.99 0 0 1 16 56V45.047A5.047 5.047 0 0 1 21.047 40c1.212 0 2.322.432 3.195 1.146A11.937 11.937 0 0 0 32 44c6.628 0 12-5.372 12-12s-5.372-12-12-12c-4.797 0-8.924 2.822-10.846 6.89l-.021-.012A1.998 1.998 0 0 1 19.343 28a2 2 0 0 1-2-2c0-.432.141-.829.374-1.154C20.344 19.607 25.741 16 32 16c8.836 0 16 7.164 16 16s-7.164 16-16 16c-3.922 0-7.486-1.442-10.262-3.794.002.024-.002.034-.02.021a1.062 1.062 0 0 0-1.718.835V56c0 .749.424 1.384 1.033 1.727A27.67 27.67 0 0 0 32 60c15.465 0 28-12.536 28-28S47.465 4 32 4C16.536 4 4 16.536 4 32v30a2 2 0 1 1-4 0V32C0 14.327 14.327 0 32 0s32 14.327 32 32-14.327 32-32 32z" /></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{ marginLeft: '30px' }}>
                            <li className="nav-link px-2 text-secondary">
                                <Link to="/">Ana Sayfa</Link>
                            </li>
                            <li className="nav-link px-2 text-white">
                                <Link to="/products">Ürünler</Link>
                            </li>
                            <li className="nav-link px-2 text-white">
                                <Link to="/orders">Siparişlerim</Link>
                            </li>
                            <li className="nav-link px-2 text-white">
                                <Link to="/baskets">Sepetim</Link>
                            </li>
                        </ul>

                        <div className="text-end">
                            {!user && <><button type="button" onClick={login} className="btn btn-outline-light me-2">Giriş Yap</button>
                                <button type="button" onClick={signin} className="btn btn-warning me-2">Üye Ol</button></>}
                            {user && <><button type="button" className="btn btn-outline-warning me-2">{user.email}</button><button type="button" onClick={logout} className="btn btn-danger">Çıkış Yap</button></>}                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LayoutComponent;