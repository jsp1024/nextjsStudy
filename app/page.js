import {connectDB} from "@/util/database";

const Home = async () => {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div>adsfdsaf</div>
  );
};

export default Home;
