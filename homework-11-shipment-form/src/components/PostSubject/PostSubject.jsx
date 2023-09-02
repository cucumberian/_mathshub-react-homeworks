/* eslint-disable react/prop-types */
import React from "react";
import FormError from "../Form/FormError";

function PostSubject({ subjectName, legendTitle, formik }) {
  const elementName = `${subjectName}Name`;
  const elementPhone = `${subjectName}Phone`;
  const elementAddress = `${subjectName}Address`;

  return (
    <>
      <fieldset>
        <legend>{legendTitle}</legend>

        <label>Имя:</label>
        <input
          name={elementName}
          id={elementName}
          type="text"
          value={formik.values[elementName]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>

        <label htmlFor="recieverPhone">Телефон: &nbsp;</label>
        <input
          name={elementPhone}
          id={elementPhone}
          type="tel"
          //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={formik.values[elementPhone]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>

        <label htmlFor={elementAddress}>Адрес: &nbsp;</label>
        <input
          name={elementAddress}
          id={elementAddress}
          type="text"
          value={formik.values[elementAddress]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
      </fieldset>
      <>
        {formik.errors[elementName] && formik.touched[elementName] && (
          <FormError>{formik.errors[elementName]}</FormError>
        )}
        {formik.errors[elementPhone] && formik.touched[elementPhone] && (
          <FormError>{formik.errors[elementPhone]}</FormError>
        )}
        {formik.errors[elementAddress] && formik.touched[elementAddress] && (
          <FormError>{formik.errors[elementAddress]}</FormError>
        )}
      </>
    </>
  );
}

export default PostSubject;
