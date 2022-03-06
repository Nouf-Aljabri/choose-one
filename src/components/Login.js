import React, { useEffect, useState } from "react";
import css from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers , setAuthUser } from "../actions"
import {Button, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [selectedUser, setUser] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const onLogin = () => {
    if (selectedUser.length>0) {
      dispatch(setAuthUser(users[selectedUser]));
      navigate("/HomePage");
    }
  };

  return (
    <div>
      <div className={css.wrapper + " bg-white"}>
        <div className={css.title + " text-center"}>Would You Rather?</div>
        <br />

        <Form role="form">
          <Form.Label className="text-center" as="div"> Login to your account </Form.Label>
           
            <Form.Control
              as="select"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select User
              </option>
              {Object.keys(users).map((key, index) => {
                return (
                  <option
                    key={index}
                    value={users[key].fullname
                      .replace(/\s+/g, "")
                      .toLowerCase()}
                  >
                    {users[key].fullname}{" "}
                  </option>
                );
              })}
            </Form.Control>

            <div className="text-center d-grid mt-4" id={css.loginBtn}>
              <Button
                variant="outline-secondary"
                onClick={onLogin}
                size="lg"
              >
                Login{" "}
              </Button>
            </div>
         
        </Form>
      </div>
      
    </div>
  );
}
