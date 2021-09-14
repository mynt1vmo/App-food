import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label } from "reactstrap";
import { Modal, Button, message } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";

import ImageApi from "../../../apis/CategoriesApi/ImageApi";
import CategoryAPI from "../../../apis/CategoriesApi";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { editCategory } from "../../../store/Category/action";
import { PATH_DASHBROAD_CATEGORY } from "../../../routes/Routes/routes.path";

const UpdateCategories = () => {
  const { id } = useParams();
  const [isVisible, setVisible] = useState(false);
  const [images, setImages] = useState();
  const [value, setValue] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await ImageApi.getAll();
      setImages(data);
    } catch (error) {
      return error;
    }
  }, []);
  useEffect(async () => {
    try {
      const { data } = await CategoryAPI.get(id);
      reset({ ...data });
      setCategory(data);
    } catch (error) {
      return error;
    }
  }, []);
  const onEditCategory = (data) => {
    const file = document.querySelector("#image");
    const newData = {
      ...data,
      image1: file === null ? value : category?.image1,
      time: moment().format()
    };
    dispatch(showSpinning());
    dispatch(editCategory(newData));
    setTimeout(() => {
      message.success({
        content: "Chỉnh sửa danh mục thành công",
        className: "custom-class",
        style: {
          marginTop: "20vh"
        }
      });
      dispatch(hiddenSpinning());
    }, 1000);
    history.push(PATH_DASHBROAD_CATEGORY);
  };
  return (
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onEditCategory)}>
      <FormGroup>
        <h5> Chỉnh sửa danh mục</h5>
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
            defaultValue={category?.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}> Bắt buộc phải nhập </span>
          )}
        </div>
      </FormGroup>

      <FormGroup className="mt-3">
        <Label>Hình ảnh</Label>
        <br />
        <Button onClick={() => setVisible(true)}>Thêm tệp </Button>
        <br />
        {value?.length > 1 ? (
          <img src={value} alt="" width="150px" />
        ) : (
          <img src={category?.image1} alt="" width="150px" id="image" />
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
                <label htmlFor={index} value={item.image1}>
                  <img src={item.image1} alt="" width="150px" height="150px" />
                </label>
                <input
                  id={index}
                  name="image"
                  style={{ margin: "10px 60px" }}
                  type="radio"
                  onChange={() => setValue(item.image1)}
                />
              </div>
            ))}
          </div>
        </Modal>
      </FormGroup>

      <button type="submit" className="btn btn-warning my-3">
        Lưu
      </button>
    </Form>
  );
};

export default UpdateCategories;
