import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Link passHref href="/first">
              <a> First </a>
            </Link>
          </td>
          <td>
            <Link passHref href="/second">
              <a>Second</a>
            </Link>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Home;
