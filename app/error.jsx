"use client";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div>
      <h1>Error fetching data</h1>
    </div>
  );
}
