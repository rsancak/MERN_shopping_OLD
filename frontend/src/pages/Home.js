import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function HomeComponent() {
    const [products, setProducts] = useState([]);

    const getAll = async () => {
        var response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    }

    useEffect(() => {
        getAll();
    }, [])

    const addBasket = async (productId) => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Giriş yapmalısın!");
            return false;
        }
        let model = { productId: productId, userId: user._id };
        var response = await axios.post("http://localhost:5000/baskets/add", model);
        if (response) {
            alert("Ürün Sepete Eklendi!");
        }
        getAll();
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {(() => {
                        if (products.length > 0) {
                            const productsList = products.map((product, index) => (
                                <div className="col-md-3" key={index}>
                                    <div className="bbb_deals">
                                        <div className="bbb_deals_title bbb_deals_title-right btn btn-danger btn-sm">STOK <span>{product.stock}</span></div>
                                        <div className="bbb_deals_title btn btn-warning btn-sm">YENİ ÜRÜN</div>
                                        <div className="bbb_deals_slider_container">
                                            <div className=" bbb_deals_item">
                                                <div className="bbb_deals_image">
                                                    <img src={"http://localhost:5000/" + product.imageUrl} />
                                                </div>
                                                <div className="bbb_deals_content mb-2">
                                                    <div className="bbb_deals_info_line d-flex justify-content-between">
                                                        <div className="bbb_deals_item_name">{product.name}</div>
                                                        <div className="bbb_deals_item_price">{product.price} TL</div>
                                                    </div>
                                                </div>
                                                {product.stock > 0 ? <button className='btn btn-success w-100'
                                                    onClick={() => addBasket(product._id)}>Sepete Ekle</button> :
                                                    <button className='btn btn-danger w-100'
                                                    >Ürün Stokta Yok!</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            return productsList;
                        } else {
                            return (
                                <>
                                    <p className='alert alert-danger mt-3'>Ürün bulunamadı! <Link to="/products">Eklemek için tıklayınız!</Link></p>
                                </>
                            )
                        }
                    })()}
                </div>
            </div>
        </>
    )
}

export default HomeComponent;