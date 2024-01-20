import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa6";

function ImageList() {
  const [isDisplay, setDisplay] = useState("none");
  const [count, setCount] = useState(0);
  let allTagsApi = [];
  let uniqueTag_api = new Set();

  let data = useSelector((state) => state.apiData);
  let { loading } = data;
  let totalData = data.data.hits;
  const [modalClickData, setModalClick] = useState({});
  function handleModal(item) {
    setModalClick(totalData.find((ite, index) => ite.id === item));

    setDisplay("block");
  }
  console.log(modalClickData);
  let tag_prev = modalClickData?.tags?.split(", ");
  let imgeRef = useRef(null);
  // function handleDownload() {
  //   console.log(imgeRef);
  // }
  //download image
  // function handleDownload() {
  //   if (imgeRef && imgeRef.current) {
  //     const imageUrl = imgeRef.current.src;
  //     const corsAnywhereUrl = `https://cors-anywhere.herokuapp.com/${imageUrl}`;

  //     // Convert the image to a Blob
  //     fetch(corsAnywhereUrl)
  //       .then((response) => response.blob())
  //       .then((blob) => {
  //         // Create a Blob URL
  //         const blobUrl = URL.createObjectURL(blob);

  //         // Create an anchor element to trigger the download
  //         const downloadLink = document.createElement("a");
  //         downloadLink.href = blobUrl;

  //         // Set the filename for the downloaded image
  //         downloadLink.download = "downloaded-image.jpg";

  //         // Append the anchor element to the document and trigger a click
  //         document.body.appendChild(downloadLink);
  //         downloadLink.click();

  //         // Remove the anchor element from the document
  //         document.body.removeChild(downloadLink);

  //         // Optionally, revoke the Blob URL to free up resources
  //         URL.revokeObjectURL(blobUrl);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching image:", error);
  //       });
  //   }
  // }

  return (
    <>
      {loading ? (
        <h1 style={{ color: "black", textAlign: "center" }}>loading...</h1>
      ) : (
        <div id="image_data">
          {totalData &&
            totalData.map((item) => {
              let item_tag = item.tags.split(", ");
              return (
                <>
                  <div
                    className="item_contain"
                    onClick={() => handleModal(item.id)}
                    key={item.id}
                  >
                    <img src={item.webformatURL} alt={item.id}></img>
                    {
                      <div className="tags">
                        {item_tag.map((tag, ind) => {
                          return (
                            <>
                              <p key={ind}>{tag}</p>
                            </>
                          );
                        })}
                      </div>
                    }
                  </div>
                </>
              );
            })}
        </div>
      )}

      <div className="modal_data_container" style={{ display: isDisplay }}>
        <div className="modal_overlay"></div>
        <div className="modal_data">
          <div className="title_and_closeIcon">
            <p>Preview Id: {modalClickData.id}</p>
            <IoCloseCircleOutline
              onClick={() => {
                setDisplay("none");
                setModalClick({});
              }}
            />
          </div>
          <div className="img_and_description">
            <div className="img_prev">
              <img
                src={modalClickData.webformatURL}
                alt="hii"
                ref={imgeRef}
              ></img>
            </div>
            <div className="descriptions">
              <div className="download_options">
                <h3>Download</h3>
                <div className="data_for_download_sizes">
                  <div
                    className="small_size"
                    style={{
                      backgroundColor: count === 0 ? "rgb(231,231,231)" : "",
                      color: count === 0 ? "#807e7e" : "",
                    }}
                    onClick={() => setCount(0)}
                  >
                    <p>small</p>
                    <p>640x960</p>
                    {count === 0 ? (
                      <TiTick className="Tick" />
                    ) : (
                      <FaRegCircle className="Tick1" />
                    )}
                  </div>
                  <div
                    className="medium_size"
                    style={{
                      backgroundColor: count === 1 ? "rgb(231,231,231)" : "",
                      color: count === 1 ? "#807e7e" : "",
                    }}
                    onClick={() => setCount(1)}
                  >
                    <p>medium</p>
                    <p>1920x2660</p>
                    {count === 1 ? (
                      <TiTick className="Tick" />
                    ) : (
                      <FaRegCircle className="Tick1" />
                    )}
                  </div>
                  <div
                    className="big_size"
                    style={{
                      backgroundColor: count === 2 ? "rgb(231,231,231)" : "",
                      color: count === 2 ? "#807e7e" : "",
                    }}
                    onClick={() => setCount(2)}
                  >
                    <p>big</p>
                    <p>2400x3600</p>
                    {count === 2 ? (
                      <TiTick className="Tick" />
                    ) : (
                      <FaRegCircle className="Tick1" />
                    )}
                  </div>
                  <div
                    className="original_size"
                    style={{
                      backgroundColor: count === 3 ? "rgb(231,231,231)" : "",
                      color: count === 3 ? "#807e7e" : "",
                    }}
                    onClick={() => setCount(3)}
                  >
                    <p>original</p>
                    <p>3850x5640</p>
                    {count === 3 ? (
                      <TiTick className="Tick" />
                    ) : (
                      <FaRegCircle className="Tick1" />
                    )}
                  </div>
                </div>
                <button className="btn_download">Download for free!</button>
              </div>
              <div className="information">
                <h3>information</h3>
                <div className="user_inform">
                  <div className="user_1">
                    <p>User</p>
                    <p className="p_user_2nd">{modalClickData.user}</p>
                  </div>
                  <div className="user_2">
                    <p>User ID</p>
                    <p className="p_user_2nd">{modalClickData.user_id}</p>
                  </div>
                  <div className="user_3">
                    <p>Type</p>
                    <p className="p_user_2nd">{modalClickData.type}</p>
                  </div>
                </div>
                <div className="views_inform">
                  <div className="views_inform1">
                    <p>Views</p>
                    <p className="p_user_2nd">{modalClickData.views}</p>
                  </div>
                  <div className="views_inform2">
                    <p>Downloads</p>
                    <p className="p_user_2nd">{modalClickData.downloads}</p>
                  </div>
                  <div className="views_inform3">
                    <p>Likes</p>
                    <p className="p_user_2nd">{modalClickData.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tag_about_img">
            <p className="p_user_2nd">Tags:</p>
            {tag_prev?.map((pr, idx) => {
              return <p key={idx}>{pr}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageList;
