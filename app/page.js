import fs from "node:fs/promises";
import ClientDemo from "./components/ClientDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";
import RSCDemo from "./components/RSCDemo";
import ServerActionsDemo from "./components/ServerActionsDemo";
import UsePromiseDemo from "./components/UsePromisesDemo";
import { Suspense } from "react";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000)
  );

  return (
    <main>
      {/* <DataFetchingDemo /> */}
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo usersPromise={fetchUsersPromise} />
      </Suspense>
      <ServerActionsDemo />
    </main>
  );
}
