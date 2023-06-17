import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B Sc. CSIT</h3>
                <span className="qualification__subtitle">
                  Tribhuwan University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">+2 (science)</h3>
                <span className="qualification__subtitle">
                  National Examination Board (Nepal)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016-2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SLC</h3>
                <span className="qualification__subtitle">
                  Government of Nepal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  AWS Cloud Foundations Training
                </h3>
                <span className="qualification__subtitle">AWS academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Message moderator</h3>
                <span className="qualification__subtitle">Yodha Astro</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Nov,2022 - Dec,2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Dot NET(Intern)</h3>
                <span className="qualification__subtitle">
                  LIS Nepal Pvt. Ltd.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Dec, 2022 - June, 2023
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Tribhuwan University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2019
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
