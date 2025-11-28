import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./input.module.css"

export function Input (
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return <input className={styles.input} {...props}></input>;
}
