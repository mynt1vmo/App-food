import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormGroup, Form, Input, Label } from "reactstrap";
import { Modal, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";

import ImageApi from "../../../apis/CategoriesApi/ImageApi";
import { hiddenSpinning, showSpinning } from "../../../store/Spinning/action";
import { addCategory } from "../../../store/Category/action";
import { PATH_DASHBROAD_CATEGORY } from "../../../routes/Routes/routes.path";

const AddCategories = () => {
  const [isVisible, setVisible] = useState(false);
  const [images, setImages] = useState();
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  useEffect(async () => {
    try {
      const { data } = await ImageApi.getAll();
      setImages(data);
    } catch (error) {
      return error;
    }
  }, []);
  const onAddCategory = (data) => {
    const newData = {
      ...data,
      image1: value,
      time: moment().format()
    };
    dispatch(showSpinning());
    dispatch(addCategory(newData));
    setTimeout(() => {
      message.success({
        content: "Thêm danh mục thành công",
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
    <Form style={{ width: "50%" }} onSubmit={handleSubmit(onAddCategory)}>
      <FormGroup>
        <h5> Thêm danh mục</h5>
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

      <FormGroup className="mt-3">
        <Label>Hình ảnh</Label>
        <br />
        <Button onClick={() => setVisible(true)}>Thêm tệp </Button>
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
        Thêm
      </button>
    </Form>
  );
};

export default AddCategories;
