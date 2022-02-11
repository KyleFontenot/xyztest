import React, { useState } from "react";
import styles from "./SignUp.module.scss";

import validator from "validator";
import Button from "../Button/Button";

// Wasn't able to finish the styling, and complete form validation.

/* ---  useReducer template code for the Favorites on page 2  --- */
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "toggle":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };
// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

export default function SignUp() {
  const [validForm, setValidForm] = useState(false);
  const [page, setPage] = useState(1);
  // const [favorites, setFavorites] = useReducer(reducer, initialFavorites);

  const validateEmail = (e) => {
    if (!validator.isEmail(e.target.value)) {
      e.target.classList.add("invalid");
      setValidForm(false);
    } else {
      e.target.classList.remove("invalid");
      setValidForm(true);
    }
  };

  if (page === 1) {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Join the domain name fan club!</h1>
          <div className={styles.formentry}>
            <label htmlFor="name">
              <span className={styles.bold}>Name</span> (required)
            </label>
            <input type="text" id="name" />
          </div>
          <div className={styles.formentry}>
            <label htmlFor="email">
              <span className={styles.bold}>Email address</span> (required)
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                validateEmail(e);
              }}
            />
          </div>
          <div className={styles.formentry}>
            <label htmlFor="dob">
              <span className={styles.bold}>Date of birth</span> (required)
            </label>
            <select name="month" id="month" className={styles.dob}>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
            </select>
            <select name="day" id="day" className={styles.dob}>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
              <option value="01">01</option>
            </select>
            <select name="month" id="month" className={styles.dob}>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
              <option value="1990">1990</option>
            </select>
          </div>
          {!validForm && <p className={styles.error}>Oop, not a valid form!</p>}
          <input
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              validateEmail(e);
              validForm && setPage(2);
            }}
          />
          <span className={styles.subtext}>Page {page} of 2</span>
        </form>
      </div>
    );
  } else if (page === 2) {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h3>Almost done!</h3>
          <div className={styles.formentry}>
            <label htmlFor="favorite">
              <span className={styles.bold}>Favorite domain names</span>{" "}
              (required)
            </label>
          </div>
          <input
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              validateEmail(e);
              validForm && setPage(3);
            }}
          />
          <span className={styles.subtext}>Page {page} of 2</span>
        </form>
      </div>
    );
  }
}
