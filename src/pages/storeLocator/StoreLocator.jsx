import React from "react";
import { ReactSVG } from "react-svg";
import { Button } from "../../component/button/button";
import StoreFilter from "../../component/storeFilter/StoreFilter";
import Store_Locator from "../../gql/query_store_locator.graphql";
import {
  Time,
  Locationgreen,
  Shipping,
  Watch,
  Callgreen,
} from "../../utils/images";
import "./storeLocator.scss";
import { useQuery } from "@apollo/client";

function StoreLocator() {
  const { loading, error, data } = useQuery(Store_Locator);

  const [aboutVideo, setAboutVideo] = React.useState([]);

  React.useEffect(() => {
    console.log(data);

    if (data) {
      setAboutVideo(data?.getStoreRecords);
      console.log(aboutVideo);
    }
  }, [data]);

  return (
    <div>
      <div className="container">
        <StoreFilter />

        <div className="location">
          {aboutVideo.map((value) => {
            return (
              <div className="location_List">
                <div className="location_List_header">
                  <h2>{value.store_name}</h2>
                  <ReactSVG className="svg_part" src={Time} />
                </div>

                <div className="location_List_add">
                  <div className="location_List_add_inner">
                    <ReactSVG className="svg_part" src={Shipping} />{" "}
                    <p>
                      {value.store_street_address_line_1 +
                        ", " +
                        value?.store_area +
                        ", " +
                        value.store_address_line_2}
                    </p>
                  </div>
                  <ReactSVG className="svg_part" src={Watch} />
                </div>

                <div className="location_List_time">
                  <ReactSVG className="svg_part" src={Locationgreen} />
                  <p>{value.store_active_time}</p>
                </div>
                <div className="location_List_btn">
                  <div className="location_List_btn_inner">
                    <ReactSVG className="svg_part" src={Callgreen} />
                    <p>{value.store_contact_number}</p>
                  </div>
                  <div>
                    <Button text={"VIEW ON MAP"} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
