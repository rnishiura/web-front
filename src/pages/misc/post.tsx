import React, { FC, useState } from "react";
import axios from "axios";

interface Form {
  title: string;
  body: string;
}

export const App = (): JSX.Element => {
  // const [file, setFile] = useState<File | null>(null);
  const [vals, setVals] = useState<Form>({ title: "", body: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVals({ ...vals, [e.target.name]: e.target.value });
  };

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/csrf/`, {
        credentials: "include",
      });
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const onClickSubmit = async () => {
    await axios
      .post(
        "http://localhost:8080/api/hoge/todo/",
        {
          title: vals.title,
          body: vals.body,
        },
        {
          headers: {
            "X-CSRFToken": (await fetchCsrfToken()).token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("body:", response.data);
      });
  };

  // alternative: using fetch
  //   fetch("http://localhost:8080/api/hoge/todo/", {
  //     credentials: "include",
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "X-CSRFToken": csrf,
  //     },
  //     body: JSON.stringify({
  //       title: "urasima tarou",
  //       body: "ryu-gu no tsukai",
  //     }),
  //   })
  //     .then((response) => response.text())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //     });
  // };

  return (
    <div className="App">
      <div className="App-form">
        <input name="title" type="text" onChange={onChange} required />
        <input name="body" type="text" onChange={onChange} required />
        <input
          type="button"
          // disabled={!file}
          value="送信"
          onClick={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default App as FC;
