import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Button,
  Form,
  Select,
  Typography,
  Cascader,
  Checkbox,
} from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAccountSchema } from "../../../utils/validation";
import { message } from "antd";
import "./Createacount.css";
import { registerWithEmailAndPassword } from "../../../apis/authuntication";

// constant
const FORM_DATA = "form-data";
const { Text, Title } = Typography;
const { Option } = Select;


const Createacount = () => {
  const [dataform, setDataform] = useState(true);
  const [defData, setDefData] = useState("");
  const navigate = useNavigate();
  // hooks

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerAccountSchema),
  });

  // functions
  const success = () => {
    message.success("This is a success message");
  };

  const submit = React.useCallback(async (data) => {
    console.log(data);
    setloadingAuthApi(true);
    const apiData = await registerWithEmailAndPassword(data);
    if (apiData.status === "success") {
      setDataLocalStorage("userData", {
        firstName: apiData.firstName,
        lastName: apiData.lastName,
        email: apiData.email,
        password: apiData.password,
      });
      //sendVerifyCode(data.id);
      navigate("/veryfiy/send");
      setloadingAuthApi(false);
    } else {
      setloadingAuthApi(false);
      alert(apiData.error);
    }
  }, []);

  const { agreement } = watch();

  const prefixSelector = (
    <Controller
      name="countryKey"
      control={control}
      render={({ field }) => (
        <Select {...field}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
          <Option value="86">+972</Option>
        </Select>
      )}
    />
  );
  useEffect(() => {
    if (localStorage.getItem(FORM_DATA)) {
      const data = JSON.parse(localStorage.getItem(FORM_DATA));

      for (const property in data) {
        setValue(property, data[property]);
      }
    }
  }, []);
  return (
    <div className="container">
      <Title>Register you account </Title>
      {dataform ? (
        <section>
        <Form className="form" onSubmitCapture={handleSubmit(submit)}>
          <div className="input-cell">
            <Text className="label">First Name :</Text>
            <div className="input-content">
              <Controller
                name="FirstName"
                control={control}
                render={({ field }) => (
                  <Input placeholder="eg: linda" {...field} />
                )}
              />
              {errors.FirstName && (
                <Text className="error">{errors.FirstName.message}</Text>
              )}
            </div>
          </div>
          <div className="input-cell">
            <Text className="label">Last Name :</Text>
            <div className="input-content">
              <Controller
                name="LastName"
                control={control}
                render={({ field }) => (
                  <Input placeholder="" {...field} />
                )}
              />
              {errors.LastName && (
                <Text className="error">{errors.LastName.message}</Text>
              )}
            </div>
          </div>
         
          <div className="input-cell">
            <Text className="label">Email :</Text>
            <div className="input-content">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="eg: example@gmail.com"
                    type="email"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <Text className="error">{errors.email.message}</Text>
              )}
            </div>
          </div>
          <div className="input-cell">
            <Text className="label">Password :</Text>
            <div className="input-content">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    placeholder="password"
                    type={"password"}
                    {...field}
                  />
                )}
              />
              {errors.password && (
                <Text className="error">{errors.password.message}</Text>
              )}
            </div>
          </div>
          <div className="input-cell">
            <Text className="label">Confirm Password :</Text>
            <div className="input-content">
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    placeholder="confirm password"
                    type={"password"}
                    {...field}
                  />
                )}
              />
              {errors.confirmPassword && (
                <Text className="error">{errors.confirmPassword.message}</Text>
              )}
            </div>
          </div>
          
          <div className="input-cell">
            <div className="input-content">
              <Controller
                name="agreement"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field}>
                    I have read the <a href="">agreement</a>
                  </Checkbox>
                )}
              />
              {errors.agreement && (
                <Text className="error">{errors.agreement.message}</Text>
              )}
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            className="submit"
            type="primary"
            htmlType="submit"
          >
            SignUp
          </Button>
        </Form>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Createacount;
