import { useForm } from "react-hook-form";
import { emailRegex, numRegex } from "../regex";

function Form() {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" type="Name *">
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          placeholder="Write your name here.."
        />
        {errors.name?.type === "required" && (
          <span>you forgot your name Sr.</span>
        )}
      </label>
      <label htmlFor="email" type="Email *">
        <input
          id="email"
          type="text"
          placeholder="Let us know how to contact you.."
          {...register("email", {
            required: "you forgot your email Sr.",
            pattern: {
              value: emailRegex,
              message: "please enter a valid email Sr.",
            },
          })}
        />
        {errors.email?.message && <span>{errors.email.message}</span>}
      </label>
      <label htmlFor="tel" type="Phone  *">
        <input
          id="tel"
          type="tel"
          placeholder="Enter Mobile number"
          {...register("phone", {
            required: "you forgot your phone number Sr.",
            minLength: { value: 6, message: "less than 6 digits" },
            maxLength: { value: 12, message: "grater than 12 digits" },
            pattern: {
              value: numRegex,
              message: "please enter a valid phone Sr.",
            },
          })}
        />
        {errors.phone?.message && <span>{errors.phone.message}</span>}
      </label>
      <label htmlFor="message" type="Message">
        <textarea
          placeholder="What would you like to tell us.."
          {...register("message")}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
