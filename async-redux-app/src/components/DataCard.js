import React from "react";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const DataCard = ({ data }) => {
  return (
    <div className="data-card">
      {data.map(wizard => {
        return (
          <Card>
            <CardBody>
              <CardTitle>{`${wizard.name}`}</CardTitle>
              <CardSubtitle>Role: {wizard.role}</CardSubtitle>
              <CardText>House: {wizard.house}</CardText>
              <CardSubtitle>School: {wizard.school}</CardSubtitle>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default DataCard;
