/* eslint-disable react/prop-types */
import React from "react";

function PostObject({ formik }) {
  return (
    <>
      <fieldset>
        <legend>Посылка</legend>

        <label htmlFor="postType">Тип отправления:</label>
        <select
          name="postType"
          id="postType"
          type="radio"
          size="3"
          value={formik.values["postType"]}
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
          value={formik.values["weight"]}
          onChange={formik.handleChange}
        ></input>

        <fieldset className="sizes">
          <legend>Габариты</legend>
          <label htmlFor="length">
            Длина (см):
            <input
              name="length"
              id="length"
              type="number"
              step="1"
              placeholder="Длина (см)"
              min="0"
              value={formik.values["length"]}
              onChange={formik.handleChange}
            ></input>
          </label>

          <label htmlFor="length">
            Ширина (см):
            <input
              name="width"
              id="width"
              type="number"
              step="1"
              placeholder="Ширина (см)"
              min="0"
              value={formik.values["width"]}
              onChange={formik.handleChange}
            ></input>
          </label>

          <label htmlFor="length">
            Высота (см):
            <input
              name="height"
              id="height"
              type="number"
              step="1"
              placeholder="Высота (см)"
              min="0"
              value={formik.values["height"]}
              onChange={formik.handleChange}
            ></input>
          </label>
        </fieldset>
      </fieldset>
    </>
  );
}

export default PostObject;
