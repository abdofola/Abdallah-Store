import React, { useState, useEffect, useRef } from "react";
import Soical from "./Social";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import { useForm } from "react-hook-form";
import { useSubmit } from "../custom_hooks/useSubmit";
import { emailRegex, numRegex } from "../regex";

export const override = css`
  font-size: 100%;
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Form({ social }) {
  const url = "https://momo-japan-market.com/contact";
  const msgRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // custom hooks
  const [fetchData, res, err, isPending] = useSubmit(url);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const { name, email, phone, message } = watch();

  // side effects to handle response message
  useEffect(() => {
    if (!isPending && res) {
      reset();
    }
  }, [res, err, isPending, reset]);

  function onSubmit(data) {
    setLoading(true);
    fetchData(data);
    !loading &&
      setTimeout(() => {
        msgRef.current.style.opacity = "0";
      }, 10000);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <input
            autoComplete="off"
            type="text"
            {...register("name", { required: true })}
          />
          <label className={`floating-label ${name ? "input-valid" : ""}`}>
            name
          </label>
          {errors.name?.type === "required" && (
            <span className="error">you forgot your name Sr.</span>
          )}
        </div>
        <div className="form__group">
          <input
            type="text"
            autoComplete="off"
            {...register("email", {
              required: "you forgot your email Sr.",
              pattern: {
                value: emailRegex,
                message: "please enter a valid email Sr.",
              },
            })}
          />
          <label className={`floating-label ${email ? "input-valid" : ""}`}>
            email
          </label>
          {errors.email?.message && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="form__group">
          <input
            type="tel"
            autoComplete="off"
            {...register("phone", {
              required: "you forgot your phone number Sr.",
              minLength: { value: 10, message: "less than 10 digits" },
              maxLength: { value: 14, message: "greater than 14 digits" },
              pattern: {
                value: numRegex,
                message: "please enter a valid phone Sr.",
              },
            })}
          />
          <label className={`floating-label ${phone ? "input-valid" : ""}`}>
            phone
          </label>
          {errors.phone?.message && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
        <div className="form__group">
          <textarea {...register("message", { required: true })} />
          <label
            className={`floating-label ${message ? "textarea-valid" : ""}`}
          >
            message
          </label>
          {errors.message?.type === "required" && (
            <span className="error">you forgot your message Sr.</span>
          )}
        </div>
        <div className="form__group">
          <button type="submit">
            {isPending ? (
              <ClipLoader loading={loading} size={20} css={override} />
            ) : (
              "send"
            )}
          </button>
          <div
            className={`response ${
              res?.sent ? "response--success" : "response--err"
            }`}
            ref={msgRef}
          >
            {res?.message}
          </div>
        </div>

        {social && (
          <div className="form__group">
            <Soical />
          </div>
        )}
      </form>
    </>
  );
}

export default Form;
