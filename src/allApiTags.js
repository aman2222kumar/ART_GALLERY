import { useSelector } from "react-redux";

function ApiTags(props) {
  //tags calling
  let allTagsApi = [];
  let uniqueTag_api = new Set();

  let data = useSelector((state) => state.apiData);
  let { loading } = data;
  let totalData = data.data.hits;
  let t = totalData?.map((item, index) => item.tags);

  for (let i = 0; i < t?.length; i++) {
    let p = t[i];

    let c = p.split(", ");

    for (let j = 0; j < c?.length; j++) {
      uniqueTag_api.add(c[j]);
    }
  }
  allTagsApi = [...uniqueTag_api];

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="tag_api_data_container">
          {allTagsApi &&
            allTagsApi.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
        </div>
      )}
    </>
  );
}

export default ApiTags;
