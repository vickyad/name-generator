"use client";
import { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import namesList from "@/data/name-list.json";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  const [names, setNames] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  function updateInput(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);
    if (newValue > 0) {
      setCount(newValue);
    }
  }

  function getRandomNames(count: number) {
    const result = [];
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * namesList.length);
      result.push(namesList[index]);
    }

    return result;
  }

  return (
    <main className={styles.main}>
      <Image src="/logo.png" height={120} width={120} alt="" />
      <h1 className={styles.title}>Cozy Corner Name Generator</h1>
      <div className={styles.buttonContainer}>
       <Input type="number" value={count} onChange={updateInput}></Input>
        <Button onClick={() => setNames(getRandomNames(count))}>
          Gerar {count} nome(s)
        </Button>
      </div>
      <div className={styles.nameContainer}>
        {names.length > 0 ? (
          names.length > 1 ? (
            <ul className={styles.listContainer}>
              {names.map((name, index) => (
                <li key={`name_item_${index}`}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>{names[0]}</p>
          )
        ) : (
          <span className={styles.emptyState}>
            Gere um nome para o amigurumi
          </span>
        )}
      </div>
    </main>
  );
}
