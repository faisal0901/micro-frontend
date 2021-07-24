import Head from "next/head";
import Link from "next/link";
function Random(props) {
  return (
    <>
      <Head>
        <title>micro random</title>
      </Head>
      <div className="container mt-12 mx-auto">
        <h1 className="text-6xl">fetcn random word</h1>
        <ul>
          {props.data.map((val, index) => {
            return (
              <li key={index} className="border border-black p-4">
                {val?.title ?? "loading"}
                <Link href="/random/[id]" as={`/random/${val.id}`}>
                  <a>launch</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
Random.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {}
};
export default Random;
