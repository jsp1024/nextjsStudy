import {connectDB} from "@/util/database";
import Link from "next/link";

const List = async () => {

  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {
        result.map((list, i) => {
          return (
            <div key={i} className="list-item">
              <Link href={`/detail/${list._id}`}><h4>{list.title}</h4></Link>
              <p>{list.content}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default List;
