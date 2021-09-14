import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Form } from "reactstrap";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import ProductApi from "../../../apis/ProductsApi";
import ImageApi from "../../../apis/ProductsApi/ImageApi";
import { getCategories } from "../../../store/Category/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { editProduct } from "../../../store/Product/action";
import { PATH_DASHBROAD_PRODUCT } from "../../../routes/Routes/routes.path";

const UpdateProduct = () => {
  const { id } = useParams();
  const [isVisible, setVisible] = useState(false);
  const [product, setProduct] = useState();
  const [images, setImages] = useState();
  const [valueImage, setImage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await ProductApi.get(id);
      reset({ ...data });
      setProduct(data);
    } catch (error) {
      return error;
    }
  }, []);
  useEffect(async () => {
    try {
      const { data } = await ImageApi.getAll();
      setImages(data);
      dispatch(getCategories());
    } catch (error) {
      return error;
    }
  }, []);
  const onEditProduct = (data) => {
    const file = document.querySelector("#image");
    const newData = {
      ...data,
      image: file === null ? valueImage : product?.image,
      time: moment().format()
    };
    dispatch(showSpinning());
    dispatch(editProduct(newData));
    setTimeout(() => {
      message.success({
        content: "Chỉnh sửa phẩm thành công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      dispatch(hiddenSpinning());
    }, 1000);
    history.push(PATH_DASHBROAD_PRODUCT);
  };
  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onEditProduct)}>
      <FormGroup>
        <h5> Thêm sản phẩm</h5>
        <Input plaintext value="Một vài giá trị/văn bản" />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="exampleName"> Tên </Label>
        <div>
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="Name"
            id="exampleName"
            placeholder="Tên "
            defaultValue={product?.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}> Bắt buộc phải nhập </span>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleprice"> Giá </Label>
        <div>
          <input
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="price"
            id="exampleprice"
            placeholder="Giá ...."
            defaultValue={product?.price}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span style={{ color: "red" }}> Bắt buộc phải nhập </span>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampledescription"> Mô tả </Label>
        <div>
          <textarea
            style={{
              width: "100%",
              border: "1px solid black",
              borderRadius: " 5px",
              outline: "none",
              padding: "5px 20px"
            }}
            type="text"
            name="description"
            id="exampledescription"
            placeholder="description"
            defaultValue={product?.description}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span style={{ color: "red" }}> Bắt buộc phải nhập </span>
          )}
        </div>
      </FormGroup>
      <FormGroup className="mt-3">
        <Button onClick={() => setVisible(true)}>Hình ảnh</Button>
        <br />
        {valueImage?.length > 1 ? (
          <img src={valueImage} alt="" width="150px" />
        ) : (
          <img src={product?.image} alt="" width="150px" id="image" />
        )}
        <Modal
          title="Hình ảnh"
          centered
          visible={isVisible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <div className="row">
            {images?.map((item, index) => (
              <div
                key={item.id}
                className="col-2"
                style={{ border: "1px solid gray", margin: "10px 10px" }}
              >
                <label htmlFor={index} value={item.image}>
                  <img src={item.image} alt="" width="150px" height="150px" />
                </label>
                <input
                  id={index}
                  name="image"
                  style={{ margin: "10px 60px" }}
                  type="radio"
                  onChange={() => setImage(item.image)}
                />
              </div>
            ))}
          </div>
        </Modal>
      </FormGroup>

      <FormGroup>
        <Label for="">Danh mục</Label>
        <div>
          <select
            name="categoryId"
            {...register("categoryId", { required: true })}
            defaultValue={product?.categoryId}
          >
            {categories.categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span style={{ color: "red" }}> Bắt buộc phải nhập </span>
          )}
        </div>
      </FormGroup>
      <button type="submit" className="btn btn-warning my-3">
        Lưu
      </button>
    </Form>
  );
};

export default UpdateProduct;
