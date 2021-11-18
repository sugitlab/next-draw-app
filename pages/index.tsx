import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Link passHref href="/embedded">
      <a> Embedded </a>
    </Link>
  );
};

export default Home;
