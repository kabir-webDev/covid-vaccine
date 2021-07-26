import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

const FooterInfo = ({ data: { icon, info1, info2, id } }) => {
  const info = "co-vax.gov.bd";
  return (
    <Col md={4}>
      <div className="pre__footer">
        <FontAwesomeIcon icon={icon} className="fContactIcon" />
        <div>
          <p className={`brnName${id}`}>Co-VAX</p>
          {`co-vax.gov.bd` && <p>{info2}</p>}
        </div>
      </div>
    </Col>
  );
};

export default FooterInfo;
