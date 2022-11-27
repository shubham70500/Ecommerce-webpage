import React from "react";
import TablesWithoutGrid from "../Tables/TablesWithoutGrid";

const SpecificationsSection = () => {
  return (
    <div>
      <h2 className="main-heading">Specifications</h2>
      <div style={{ height: "20px" }}></div>
      <TablesWithoutGrid />
      <img
        src="https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/20220822/mweb/PREGLRSOF4/dimension_1_1.jpg"
        srcSet="https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/20220822/mweb/PREGLRSOF4/dimension_1_1.jpg"
        alt="sofa"
        loading="lazy"
        className="img-spec-350"
      />
    </div>
  );
};

export default SpecificationsSection;
