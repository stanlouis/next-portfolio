import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = ({user, statusCode}) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }
  return (
    <Layout title="About">
      <h1>About Page</h1>
      <p>{user.name}</p>
      <img
        src={user.avatar_url}
        alt="Stanley Louis"
        height="200px"
      />
    </Layout>
  );
};

About.getInitialProps = async function() {
  const res = await fetch("https://api.github.com/users/stanlouis");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  console.log(data);

    return {
        user: data,
        statusCode
    };
};

export default About;
