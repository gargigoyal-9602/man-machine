import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Header, Footer, ProductCard, Banners } from "../../components";
import { fetchUUID, setGuestStatus } from "../../redux/actions/loginActions";
import { get, getProducts, post } from "../../Barriers/apiHelper";
import service, { serviceTypes } from "../../services";
import langg from "../../language";
import HeroBanner from "../../components/hero-banner";

import "./css/index.scoped.css";

function Home(props) {
  const styles = {
    item: {
      margin: "0 10px",
    },
  };

  const dispatch = useDispatch();
  const [products, setHomeProduts] = useState([]);
  // const [featureProducts, setFeaturedProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  // const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const state = useSelector((state) => state.logInReducer);
  // const cacheState = useSelector((state) => state.cache);
  // const cartState = useSelector((state) => state.cartReducer);

  const lang = new langg("homeScreen");

  useEffect(async () => {
    if (!localStorage.getItem("UUID")) {
      let uuId = uuidv4();
      dispatch(fetchUUID(uuId));
      localStorage.setItem("UUID", uuId);
    }

    if (Object.keys(state.loginData).length > 0 && state.uuId.length > 0) {
      callProducts(state.loginData.token, state.uuId);
      getRecommendedProducts(state.loginData.token, state.uuId);
    }
    if (state.uuId.length > 0) {
      console.log("UUID Length");
      if (state.guest_user) await createGuestUser(state.uuId);
    }
  }, []);

  // useEffect(() => {}, [products]);

  function callProducts(token, uuid) {
    console.log(uuid);
    let headers = {
      headers: {
        Authorization: token.token_type + " " + token.access_token,
      },
    };
    getProducts(
      `/products/get_all_products?page=1&per_page=15&uuid=${uuid}`,
      headers
    )
      .then((res) => {
        console.log(res);
        setHomeProduts(res.data.data);
      })
      .catch((Err) => {
        console.log("err", Err);
      });
  }

  const fetchRecommendedProducts = (uuid, headers) => {
    // Getting all recommended products
    get(`/products/recommended_products?page=1&per_page=15&uuid=${uuid}`, {
      headers,
    })
      .then((res) => {
        setRecommendedProducts(res.data.data);
      })
      .catch((Err) => {
        console.error(Err);
      });
  };

  function getRecommendedProducts(token, uuid) {
    let headers = {
      headers: {
        Authorization: token.token_type + " " + token.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetchRecommendedProducts(uuid, headers.headers);
  }

  const createGuestUser = (uuid) => {
    let data = {
      uuid: uuid,
    };
    post(`/users/create_guest_user`, data)
      .then((res) => {
        console.log(res);
        callProductsUUID(res.data.data.uuid);
        getRecommendedProductsUUID(res.data.data.uuid);
        dispatch(setGuestStatus(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callProductsUUID = (uuid) => {
    let headers;
    if (localStorage.getItem("token")) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    }
    get(`/products/get_all_products?page=1&per_page=15&uuid=${uuid}`, {
      headers,
    })
      .then((res) => {
        console.log(res);
        setHomeProduts(res.data.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  const getRecommendedProductsUUID = (uuid) => {
    let headers;
    if (localStorage.getItem("token")) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    }
    fetchRecommendedProducts(uuid, headers);
  };

  function onClickHeart(product) {
    const data = {
      product_id: product.id,
      uuid: localStorage.getItem("UUID"),
      userId: state.user.id,
    };
    let serviceType;
    let notificationMsg;
    if (product.is_wishlisted) {
      serviceType = serviceTypes.removeFromWishlist(data);
      notificationMsg = `${product.name} has been removed to wishlist`;
    } else {
      serviceType = serviceTypes.addToWishlist(data);
      notificationMsg = `${product.name} has been added to wishlist`;
    }
    service(serviceType)
      .then(({ response, error }) => {
        if (error) {
          window.notify([{ message: error.message, type: "warning" }]);
        } else if (response) {
          window.notify([{ message: notificationMsg, type: "info" }]);
          callProductsUUID(localStorage.getItem("UUID"));
        }
      })
      .finally(() => {});
  }

  return (
    <div>
      <Header onProps={props} />
      <HeroBanner />
      <ProductCard
        // products={cacheState.homepage?.latest_products} i.e. >>>> Remove it later
        products={products}
        name={lang.get("newProducts", "New Collection")}
        onViewMore={() =>
          props.history.push("/shop?&order_field=latest&page=1&per_page=15")
        }
      />
      <Banners position={2} />
      <ProductCard
        // products={cacheState.homepage?.recommended_products}
        products={recommendedProducts}
        name={lang.get("recommendedProducts", "Featured Products")}
        onViewMore={() =>
          props.history.push("/shop?order_field=recommended&page=1&per_page=15")
        }
      />
      <Banners position={3} />
      <Footer />
    </div>
  );
}

export default Home;
