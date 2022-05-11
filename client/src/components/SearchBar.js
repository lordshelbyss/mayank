import { reduxForm, Field } from "redux-form";

const SearchBar = ({ handleSubmit,onSubmitCallback }) => {
  const renderField = ({ input, label, type, meta }) => {
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    );
  };

  const onSubmit = (data) => {
    onSubmitCallback(data);
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="productID"
          component={renderField}
          type="text"
          label="Enter Product ID"
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="submit"
            className="waves-effect waves-light btn-large centre"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.productID) {
    errors.productID = "Please enter valid product ID";
  }
  return errors;
};

export default reduxForm({
  form: "searchQuery",
  validate,
})(SearchBar);
