import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css"

export function Button (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return <button className={styles.button} {...props}></button>;
}
