import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoires } from "redux/action/category";
import { getAttributes } from "redux/action/attribute";
import { editProduct } from "redux/action/product";
import { getProductDetails } from "redux/action/product";
import ImageSelectDropzone from "components/ImageSelectDropzone";
import ImageSlider from "components/ImageSlider";
const EditProduct = ({ match, history }) => {
  const productInfo = useSelector((state) => state?.product?.product?.product);
  const dispatch = useDispatch();
  console.log("productInfo", productInfo);
  useEffect(() => {
    console.log("Running");
    dispatch(getProductDetails(match.params.id));
  }, [match.params.id]);
  const cats = useSelector((state) => state?.category?.allcategories?.category);
  const atts = useSelector(
    (state) => state?.attribute?.allattributes?.attribute
  );
  const [productName, setproductname] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchParam, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const [images, setImages] = useState([]);
  const [category, setcategory] = useState("");
  const [attribute, setattribute] = useState("");
  const [price, setprice] = useState("");
  const [instock, setinstock] = useState("");
  const [edit, setIsEdit] = useState(false);
  const [hover, sethover] = useState(false);
  const [description, setdescription] = useState("");
  const [usage, setusage] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [data, setData] = useState({
    project_images: [],
  });
  const { project_images } = data;
  const formData = new FormData();
  formData.append("productName", productName);
  formData.append("description", description);
  formData.append("usage", usage);
  formData.append("price", price);
  formData.append("instock", instock);
  formData.append("category", category);
  formData.append("attribute", attribute);
  console.log("project images", project_images);
  project_images.forEach((reciept) => formData.append("reciepts", reciept));
  useEffect(() => {
    dispatch(getCategoires());
    dispatch(getAttributes());
  }, []);
  console.log("Cats", atts);
  console.log("Category", category);
  console.log("FormData", formData);
  useEffect(() => {
    if (productInfo) {
      setproductname(productInfo?.productName);
      setprice(productInfo?.price);
      setinstock(productInfo?.instock);
      setdescription(productInfo?.description);
      setusage(productInfo?.usage);
      setcategory(productInfo?.category);
      setattribute(productInfo?.attribute);
      setImages(productInfo?.productImage);
    }
  }, [productInfo]);

  //for deleting
  const handleMouseEnter = () => {
    sethover(true);
  };

  const handleMouseLeave = () => {
    sethover(false);
  };

  const handleDeleteImage = (index) => {
    const temp_data = [...images];

    temp_data.splice(index, 1);

    console.log("tempdata", temp_data);

    setImages(temp_data);
  };
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link
                className="fas fa-arrow-left me-3 go-back-icon"
                to="/products"
              />
              <h1 className="page-title fw-800 primFont mb-0">Edit Product</h1>
            </div>
            <div className="box custom_box">
              <form action="#">
                <div className="row">
                  <div className="col-xxl-6">
                    {
                      <div className="product_slider  my-3">
                        <div className="slider slider-for">
                          <ImageSlider
                            images={images}
                            enable_delete={true}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            hover={hover}
                            handleDeleteImage={handleDeleteImage}
                          />
                        </div>
                      </div>
                    }
                    <div className="upload_div mb-5">
                      <ImageSelectDropzone
                        max={5}
                        setproductimage={setProductImage}
                        files={data?.project_images}
                        setFiles={(project_images) =>
                          setData({ ...data, project_images })
                        }
                        accept="image/*"
                      />
                    </div>
                    <p className="primary-text pt-2 pl-2 text-danger">
                      Please note that you can upload up to {5 - images.length}{" "}
                      images only
                    </p>
                  </div>

                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="prod_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Product Name<span className="text-danger">*</span>
                      </label>
                      <input
                        id="prod_name"
                        type="text"
                        value={productName}
                        onChange={(e) => {
                          setproductname(e.target.value);
                        }}
                        placeholder="Enter Name of Product"
                        defaultValue="ADAFFDGFG"
                        className="auth-input mx-0"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="productDetails"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Product Details <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="productDetails"
                        rows={5}
                        value={description}
                        onChange={(e) => {
                          setdescription(e.target.value);
                        }}
                        className="w-100 mx-0"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor "
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="how_to_use"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        How to Use <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="how_to_use"
                        value={usage}
                        onChange={(e) => {
                          setusage(e.target.value);
                        }}
                        rows={5}
                        className="w-100 mx-0"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor "
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <div className="select_2 w-100">
                        <label
                          htmlFor="category_select"
                          className="d-block primLable my-2 px-md-3 px-1"
                        >
                          Category<span className="text-danger">*</span>
                        </label>
                        <select
                          id
                          className="dashInput sm-dropdown mb-3"
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                        >
                          {/* <option value>{category}</option> */}
                          {cats && cats.length > 0
                            ? cats?.map((item, index) => (
                                <option value={item?._id} key={item?._id}>
                                  {item?.categoryName}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <div className="select_2 w-100">
                        <label
                          htmlFor="attribute_select"
                          className="d-block primLable my-2 px-md-3 px-1"
                        >
                          Attribute<span className="text-danger">*</span>
                        </label>
                        <select
                          id
                          className="dashInput sm-dropdown mb-3"
                          value={attribute}
                          onChange={(e) => setattribute(e.target.value)}
                        >
                          {/* <option value>{category}</option> */}
                          {atts && atts.length > 0
                            ? atts?.map((item, index) => (
                                <option value={item?._id} key={item?._id}>
                                  {item?.attributeName}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="inv_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Inventory<span className="text-danger">*</span>
                      </label>
                      <input
                        id="inv_name"
                        type="number"
                        value={instock}
                        onChange={(e) => {
                          setinstock(e.target.value);
                        }}
                        placeholder={124}
                        defaultValue={124}
                        className="auth-input mx-0"
                      />
                    </div>
                    <button
                      className="prim-btn cmsbtnPrim"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(editProduct(formData, match.params.id));
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;
