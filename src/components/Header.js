import React from "react";
import "../Header.css";

const Header = ({
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
  head7,
}) => {
  return (
    <div className="header-container">
      <div className="header-row">
        <div className="header">
          <h1>{head1}</h1>
          <h1>{head2}</h1>
          <h1>{head3}</h1>
        </div>
        <div className="header-data">
          <h1 className="header-entry">{head4}</h1>
          <h1 className="header-entry">{head5}</h1>
          <h1 className="header-entry">{head6}</h1>
          <h1 className="header-entry">{head7}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
