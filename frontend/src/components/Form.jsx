import React, { Fragment } from "react";
import { toast } from "react-toastify";
import {
  validateFieldName,
  validateFieldCode,
  validateFieldContinent,
} from "./Validate";
const info = {
  id: null,
  name: "",
  code: "",
  continent: "",
};
function Form({ postCountry, putCountry, dataEdit, setDataEdit }) {
  const [form, setForm] = React.useState(info);
  const [errors, setErrors] = React.useState(null);
  const refName = React.useRef();
  const refCode = React.useRef();
  const refContinent = React.useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFieldName(form.name) !== true) {
      toast.error(validateFieldName(form.name), {
        theme: "colored",
      });
      // alert(validateFieldName(form.name));
      setErrors({ name: validateFieldName(form.name) });
      refName.current.focus();
      return;
    }
    if (validateFieldCode(form.code) !== true) {
      toast.error(validateFieldCode(form.code), {
        theme: "colored",
      });
      // alert(validateFieldCode(form.code));
      setErrors({ code: validateFieldCode(form.code) });
      refCode.current.focus();
      return;
    }
    if (validateFieldContinent(form.continent) !== true) {
      toast.error(validateFieldContinent(form.continent), {
        theme: "colored",
      });
      // alert(validateFieldContinent(form.continent));
      setErrors({ continent: validateFieldContinent(form.continent) });
      refContinent.current.focus();
      return;
    }
    if (form.id === null) {
      postCountry(form);
    } else {
      putCountry(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm({
      id: null,
      name: "",
      code: "",
      continent: "",
    });
    setErrors({
      name: null,
      code: null,
      continent: null,
    });
    setDataEdit(null);
    refName.current.focus();
  };
  React.useEffect(() => {
    if (dataEdit) {
      setForm(dataEdit);
    } else {
      setForm(info);
    }
    refName.current.focus();
  }, [dataEdit]);
  return (
    <Fragment>
      <h5 className="text-center">
        {dataEdit ? "Edit Country" : "Add Country"}
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="names" className="form-label">
            Names:
          </label>
          <input
            type="text"
            className="form-control"
            ref={refName}
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <span className="text-danger">
          {errors && errors.name ? errors.name : null}
        </span>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code:
          </label>
          <input
            type="text"
            className="form-control"
            ref={refCode}
            name="code"
            value={form.code}
            onChange={handleChange}
          />
        </div>
        <span className="text-danger">
          {errors && errors.code ? errors.code : null}
        </span>
        <div className="mb-3">
          <label htmlFor="continent" className="form-label">
            Continent:
          </label>
          <input
            type="text"
            className="form-control"
            ref={refContinent}
            name="continent"
            value={form.continent}
            onChange={handleChange}
          />
        </div>
        <span className="text-danger">
          {errors && errors.continent ? errors.continent : null}
        </span>
        <div className="mb-3">
          <button
            type="submit"
            className={
              dataEdit
                ? "btn btn-primary btn-sm m-2"
                : "btn btn-info btn-sm text-white m-2"
            }
          >
            {dataEdit ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleReset}
          >
            New
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
