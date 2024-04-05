import React, { useEffect } from "react";
import fetchData from "./fetchData";

const LoadData = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [callApi, setCallApi] = React.useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (callApi) {
      setLoading(true); // Set loading to true when API call starts
      fetchData(controller)
        .then((res) => {
          setData(res.data);
          setLoading(false); // Set loading to false when API call succeeds
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); // Set loading to false when API call fails
        });
    } else {
      controller.abort();
    }
    // Cleanup function to abort the request if component unmounts
    return () => {
      controller.abort();
      setData([]);
    };
  }, [callApi]);

  return (
    <div>
      <button onClick={() => setCallApi(true)} style={{ margin: 8 }}>
        Call Api
      </button>
      <button onClick={() => setCallApi(false)} style={{ margin: 8 }}>
        Cancel Api
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((d) => {
            return <li key={d.id}> {d.username}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default LoadData;
