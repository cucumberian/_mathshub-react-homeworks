import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormError from "./FormError";

import "./Form.css";

export function Form() {
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
    onSubmit: (values) => {
      console.log("formik.values =", values);
    },
    validationSchema: Yup.object({
      senderName: Yup.string().min(3).required(),
      senderPhone: Yup.number().min(0).max(99999999999).required(),
      senderAddress: Yup.string().min(3).required(),
      recieverName: Yup.string().min(3).required(),
      recieverPhone: Yup.number().min(0).max(99999999999).required(),
      recieverAddress: Yup.string().min(3).required(),
      weight: Yup.number().min(0.1).max(1000),
      width: Yup.number().min(1).max(100),
      length: Yup.number().min(1).max(100),
      height: Yup.number().min(1).max(100),
    }),
  };
  const formik = useFormik(formikOptions);

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <fieldset>
        <legend>Отправитель</legend>
        <label htmlFor="senderName">Имя:</label>
        <input
          name="senderName"
          id="senderName"
          type="text"
          value={formik.values.senderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>

        <label htmlFor="senderPhone">Телефон: &nbsp;</label>
        <input
          name="senderPhone"
          id="senderPhone"
          type="phone"
          value={formik.values.senderPhone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>

        <label htmlFor="senderAddress">Адрес: &nbsp;</label>
        <input
          name="senderAddress"
          id="senderAddress"
          type="text"
          value={formik.values.senderAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
      </fieldset>
      <>
        {formik.errors.senderName && formik.touched.senderName && (
          <FormError>{formik.errors.senderName}</FormError>
        )}
        {formik.errors.senderPhone && formik.touched.senderPhone && (
          <FormError>{formik.errors.senderPhone}</FormError>
        )}
        {formik.errors.senderAddress && formik.touched.senderAddress && (
          <FormError>{formik.errors.senderAddress}</FormError>
        )}
      </>

      <fieldset>
        <legend>Получатель</legend>
        <label htmlFor="recieverName">Имя: &nbsp;</label>
        <input
          name="recieverName"
          id="recieverName"
          type="text"
          value={formik.values.recieverName}
          onChange={formik.handleChange}
        ></input>

        <label htmlFor="recieverPhone">Телефон: &nbsp;</label>
        <input
          name="recieverPhone"
          id="recieverPhone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={formik.values.recieverPhone}
          onChange={formik.handleChange}
        ></input>

        <label htmlFor="recieverAddress">Адрес: &nbsp;</label>

        <input
          name="recieverAddress"
          id="recieverAddress"
          type="text"
          value={formik.values.recieverAddress}
          onChange={formik.handleChange}
        ></input>
      </fieldset>

      <fieldset>
        <legend>Посылка</legend>

        <label htmlFor="postType">Тип отправления: &nbsp; </label>
        <select
          name="postType"
          id="postType"
          type="radio"
          size="3"
          value={formik.values.postType}
          onChange={formik.handleChange}
        >
          <option value="regular">обычное</option>
          <option value="registered">заказное</option>
          <option value="express">срочное</option>
        </select>

        <label htmlFor="weight">Вес (кг): </label>
        <input
          name="weight"
          id="weight"
          type="number"
          step="0.1"
          placeholder="Вес (кг)"
          min="0"
          value={formik.values.weight}
          onChange={formik.handleChange}
        ></input>

        <fieldset className="sizes">
          <legend>Габариты</legend>
          <label htmlFor="length">
            Длина (см): &nbsp;
            <input
              name="length"
              id="length"
              type="number"
              step="1"
              placeholder="Длина (см)"
              min="0"
              value={formik.values.length}
              onChange={formik.handleChange}
            ></input>
          </label>

          <label htmlFor="length">
            Ширина (см): &nbsp;
            <input
              name="width"
              id="width"
              type="number"
              step="1"
              placeholder="Ширина (см)"
              min="0"
              value={formik.values.width}
              onChange={formik.handleChange}
            ></input>
          </label>

          <label htmlFor="length">
            Высота (см): &nbsp;
            <input
              name="height"
              id="height"
              type="number"
              step="1"
              placeholder="Высота (см)"
              min="0"
              value={formik.values.height}
              onChange={formik.handleChange}
            ></input>
          </label>
        </fieldset>
      </fieldset>

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
