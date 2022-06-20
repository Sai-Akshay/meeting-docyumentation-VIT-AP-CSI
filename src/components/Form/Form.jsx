import React from 'react'
import './Form.css';
const Form = () => {
  return (
    <div className="form">
      <form className="formControl">
        <div className="formInput">
          <label>Posted By:</label>
          <input type="text" className="inputField" placeholder="Type here" />
        </div>
        <div className="formInput">
          <label>Title:</label>
          <input
            type="text"
            className="inputField"
            name="title"
            placeholder="Type here"
          />
        </div>
        <div className="formInput desc">
          <label>Posted By:</label>
          <textarea
            className="description"
            name="description"
            rows="6"
            cols="40"
            maxlength="500"
            minlength="3"
            placeholder="Type here"
          />
        </div>
        <div className="fileGroup">
          <div className="fileInput">
            <label>
              SVG
              <input type="file" name="svg" className="fileInputControl" />
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              PNG
              <input type="file" name="png" className="fileInputControl" />
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              Docs
              <input type="file" name="docs" className="fileInputControl" />
              <div className="addIcon">+</div>
            </label>
          </div>
          <div className="fileInput">
            <label>
              Posters
              <input type="file" name="psosters" className="fileInputControl" />
              <div className="addIcon">+</div>
            </label>
          </div>
        </div>
        <button type="submit" className="postSubmitButton">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form