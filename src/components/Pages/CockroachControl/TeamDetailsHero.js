import React from "react";

const TeamDetailsHero = () => {
  return (
    <>
      <div className="team-single-page pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="team-hero-img p-relative">
                <img src="assets/img/service/cock.jpg" alt="" />
                <div className="team-info-box white-bg pt-60 pl-100 pr-100">
                  <h3 className="t-box-title">Cockroach Control</h3>
                  <span>Expert Cockroach Management for a Pest-Free Home</span>
                  <div className="team-member-info-list">
                    <ul>
                      <li>Efficient Cockroach Control Solutions</li>
                      <li>Say Goodbye to Cockroaches with Jezben Pest Control</li>
                      <li>
                        E-mail:
                        <a href="mailto:'info@jezben.com'">
                          info@jezben.com
                        </a>
                      </li>
                      <li>
                        Phone: <a href="tel:507-452-1254"> (+971)52462545632</a>
                      </li>
                    </ul>
                  </div>
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsHero;
