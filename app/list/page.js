import {connectDB} from "@/util/database";

const List = async () => {

  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {
        result.map((list) => {
          return (
            <div className="list-item">
              <h4>{list.title}</h4>
              <p>{list.content}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default List;
