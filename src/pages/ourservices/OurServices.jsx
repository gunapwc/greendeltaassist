import React from "react";
import PriTitle from "../../component/innerSection/PriTitle";
import {
  OurServices1,
  OurServices2,
  OurServices3,
  OurServices4,
  OurServices5,
  OurServices6,
  OurServices7,
  OurServices8,
  OurServices9,
  OurServices10,
  OurServices11,
  OurServices12,
  OurServices13,
  OurServices14,
  OurServices15,
  OurServices16,
  Whatsapp,
} from "../../utils/images";
import "./OurServices.scss";
import Outlets from "../../component/outlets/Outlets";
import Our_Services from "../../gql/query_our_services.graphql";
import { useQuery } from "@apollo/client";

function OurServices() {
  const { loading, error, data } = useQuery(Our_Services);

  const [ourservices, setOurServices] = React.useState([]);

  React.useEffect(() => {
    console.log(data);

    if (data) {
      setOurServices(data?.cmsBlocks.items);
      console.log(ourservices);
    }
  }, [data]);

  return (
    <>
      <div className="main-container">
        <div className="our-services">
          <div className="services-header">
            <div className="site-main-container d-flex align-items-center">
              <div className="about-aster">
                <h4>Pharmacy Retailing</h4>
                <h3>
                  Complete Circle Of Care - Offering Expertise &amp;
                  Accessibility
                  <br />
                </h3>
              </div>
              <div className="about-header-img">
                <img
                  src={OurServices4}
                  alt="madison"
                  width="861"
                  height="349"
                />
              </div>
            </div>
          </div>

          {ourservices.map((value) => {
            return <div dangerouslySetInnerHTML={{ __html: value.content }} />;
          })}
        </div>
      </div>
    </>
  );
}

export default OurServices;
