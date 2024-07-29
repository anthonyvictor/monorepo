"use client";

import { User } from "@monorepo/types";
import { formatShortDate } from "@monorepo/util";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("2024-01-01");
  const user: User = { id: "1", name: "John" };

  const formattedDate = value
    ? (() => {
        const d = new Date(value);
        d.setHours(d.getHours() + 3);

        return formatShortDate(d);
      })()
    : "";
  return (
    <div className="w-full h-full">
      <h1>Type a date:</h1>
      <input
        type="date"
        min={"2024-01-01"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>
        <h3>Formatted date: {formattedDate}</h3>
      </div>
      <div>
        <h3>User: {JSON.stringify(user)}</h3>
      </div>
    </div>
  );
}
