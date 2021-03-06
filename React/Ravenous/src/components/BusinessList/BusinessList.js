import React from "react";
import "./BusinessList.css";
import Business from "../Business/business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business ket={business.id} business={business} />
          })
          
        }
      </div>
    );
  }
}

export default BusinessList;
