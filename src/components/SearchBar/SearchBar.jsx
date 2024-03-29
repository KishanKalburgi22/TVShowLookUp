import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState();
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function handleValue(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon}></SearchIcon>
      <input
        onKeyUp={submit}
        onChange={handleValue}
        className={s.input}
        type="text"
        value={value}
        placeholder="Search any movie you like...!"
      />
    </>
  );
}
