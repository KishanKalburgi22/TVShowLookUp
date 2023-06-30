import s from "./style.module.css";
export function Logo({ title, subTitle, img }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="logo" />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subTitle}>{subTitle}</div>
    </>
  );
}
