import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";

import ImageApi from "../../../apis/ProductsApi/ImageApi";
import { addProduct } from "../../../store/Product/action";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { PATH_DASHBROAD_PRODUCT } from "../../../routes/Routes/routes.path";
import { getCategories } from "../../../store/Category/action";

const AddProduct = () => {
  const [isVisible, setVisible] = useState(false);
  const [images, setImages] = useState();
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await ImageApi.getAll();
      setImages(data);
      dispatch(getCategories());
    } catch (error) {
      return error;
    }
  }, []);
  const onAddProduct = (data) => {
    const newData = {
      ...data,
      image: value,
      time: moment().format()
    };
    dispatch(showSpinning());
    dispatch(addProduct(newData));
    setTimeout(() => {
      message.success({
        content: "Thêm sản phẩm thành công",
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
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onAddProduct)}>
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
        <img src={value} alt="" width="150px" />
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
                  onChange={() => setValue(item.image)}
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
        Thêm
      </button>
    </Form>
  );
};

export default AddProduct;
