import React, { FC, useState } from "react";
import axios from "axios";

export const App = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("description", title);
    formData.append("document", file);

    await axios
      .post("http://localhost:8080/api/hoge/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": (await fetchCsrfToken()).token,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("body:", response.data);
      });
  };

  // const onClickSubmit = async () => {
  //   await axios
  //     .post(`http://localhost:8080/api/hoge/upload/`, formData, {
  //       headers: {
  //         // "X-Requested-With": "XMLHttpRequest",
  //         /*"X-CSRFToken": document
  //           .querySelector('meta[name="csrf-token"]')
  //           .getAttribute("content"),*/
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((e: AxiosError) => {
  //       console.error(e);
  //     });
  // };

  return (
    <div className="App">
      <div className="App-form">
        <input name="title" type="text" onChange={onChange} required />
        <input
          name="document"
          type="file"
          accept="image/*"
          onChange={onChangeFile}
          required
        />
        <input
          type="button"
          disabled={!file}
          value="送信"
          onClick={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default App as FC;
