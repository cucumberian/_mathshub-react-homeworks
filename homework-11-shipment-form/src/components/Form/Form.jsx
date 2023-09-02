import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import PostSubject from "../PostSubject/PostSubject";
import PostObject from "../PostObject/PostObject";

import "./Form.css";

export function Form() {
  const dispatch = useDispatch();

  const formikOptions = {
    initialValues: {
      senderName: "",
      senderPhone: "",
      senderAddress: "",
      recieverName: "",
      recieverPhone: "",
      recieverAddress: "",
      weight: 0,
      length: 0,
      height: 0,
      width: 0,
      postType: "regular",
      insurance: false,
      callback: false,
    },

    onSubmit: () => {
      dispatch({ type: "add", payload: formik.values });
    },

    validationSchema: Yup.object({
      // senderName: Yup.string().min(3).required(),
      // senderPhone: Yup.number().min(0).max(99999999999).required(),
      // senderAddress: Yup.string().min(3).required(),
      // recieverName: Yup.string().min(3).required(),
      // recieverPhone: Yup.number().min(0).max(99999999999).required(),
      // recieverAddress: Yup.string().min(3).required(),
      // weight: Yup.number().min(0.1).max(1000),
      // width: Yup.number().min(1).max(100),
      // length: Yup.number().min(1).max(100),
      // height: Yup.number().min(1).max(100),
    }),
  };

  const formik = useFormik(formikOptions);

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <PostSubject
        subjectName="sender"
        legendTitle="Отправитель"
        formik={formik}
      />

      <PostSubject
        subjectName="reciever"
        legendTitle="Получатель"
        formik={formik}
      />

      <PostObject formik={formik} />

      <fieldset className="other">
        <legend>Другое</legend>
        <label htmlFor="insurance">
          <input
            type="checkbox"
            name="insurance"
            id="insurance"
            value={formik.values.insurance}
            onChange={formik.handleChange}
          />
          Страхование
        </label>
        <label htmlFor="callback">
          <input
            type="checkbox"
            name="callback"
            id="callback"
            value={formik.values.callback}
            onChange={formik.handleChange}
          />
          callback
        </label>
      </fieldset>

      <button type="submit">Отправить посылку</button>
    </form>
  );
}

export default Form;
