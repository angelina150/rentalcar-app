import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import css from "./FormOrder.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().nullable(),
  comment: Yup.string(),
});

const FormOrder = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
    toast.success("Form submitted successfully!");
  };
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: null,
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <label className={css.label}>
              <Field className={css.input} name="name" placeholder="Name*" />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </label>

            <label className={css.label}>
              <Field
                className={css.input}
                name="email"
                type="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>

            <label className={css.label}>
              <DatePicker
                popperClassName={css.customDatepicker}
                className={css.customCalendar}
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                weekStartDay={1}
                placeholderText="Booking date"
                customInput={<Field className={css.input} name="bookingDate" />}
                formatWeekDay={(day) => day.substring(0, 3).toUpperCase()}
              />
              <ErrorMessage
                className={css.error}
                name="bookingDate"
                component="span"
              />
            </label>

            <label className={css.label}>
              <Field
                className={css.comment}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
            </label>

            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormOrder;
