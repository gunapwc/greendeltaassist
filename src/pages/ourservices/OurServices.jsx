import React from "react";
import PriTitle from "../../component/innerSection/PriTitle";
import {
  OurServices4,
} from "../../utils/images";
import "./OurServices.scss";
import Outlets from "../../component/outlets/Outlets";
import Our_Services from "../../gql/query_our_services.graphql";
import { useQuery } from "@apollo/client";

function OurServices() {
  const {  data } = useQuery(Our_Services,{
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      identifiers: ["pharmacy-retailing", "home-delivery", "online-services", "rewards-program", "tele-consultation"],
    }});

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
