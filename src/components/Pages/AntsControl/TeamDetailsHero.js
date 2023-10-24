import React from "react";

const TeamDetailsHero = () => {
  return (
    <>
      <div className="team-single-page pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="team-hero-img p-relative">
                <img src="assets/img/service/ant.jpg" alt="" />
                <div className="team-info-box white-bg pt-60 pl-100 pr-100">
                  <h3 className="t-box-title">Ants Control</h3>
                  <span>Ants Begone: Jezben Pest Control's Expert Ant Management</span>
                  <div className="team-member-info-list">
                    <ul>
                      <li>Effective Ant Control Solutions for a Pest-Free Home</li>
                      <li>Safeguarding Your Space from Unwanted Ant Intruders</li>
                      <li>
                        E-mail:
                        <a href="mailto:'info@.com'">
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
