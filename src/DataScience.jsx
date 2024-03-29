import commerce from "./images/commerce.png";
import roleofdataScientist from "./images/roleofdataScientist.png";
import DSMechanical from "./images/DSMechanical.png";
import DSvsDA from "./images/DSvsDA.png";
import LearnDS from "./images/LearnDS.png";
function DataScience() {
  return (
    <>
      <div className="container" style={{ marginTop: 60 }}>
        <h1 className="text-center">DATA SCIENCE</h1>
        <div className="row">
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/real-world-data-science-examples/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="feature image- Real World Data Science Examples"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/real-world-data-science-examples/"
                  >
                    12 Real-World Data Science Examples: Power Of Data Science{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/lukesh/"
                    >
                      Lukesh S
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">25 Mar, 2024</p>
                    <p className="mb-0 card-text">7 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="Feature image - Top High Paying Non-Coding Jobs in Data Science"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/"
                  >
                    Top 10 High Paying Non-Coding Jobs in Data Science in 2024{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/isha/"
                    >
                      Isha Sharma
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">13 Dec, 2023</p>
                    <p className="mb-0 card-text">6 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/can-commerce-students-do-data-science/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src={commerce}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="can commerce student do data science"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/can-commerce-students-do-data-science/"
                  >
                    Can A Commerce Student Do Data Science?{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/saakshi/"
                    >
                      Saakshi Priyadarshini
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">08 Sep, 2023</p>
                    <p className="mb-0 card-text">3 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src={roleofdataScientist}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/"
                  >
                    Roles and Responsibilities of a Data Scientist{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/jaishree/"
                    >
                      Jaishree Tomar
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">20 Oct, 2023</p>
                    <p className="mb-0 card-text">5 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src={DSMechanical}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="Data Scientist"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/"
                  >
                    How to become a Data Scientist after Mechanical Engineering?{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/lahari-chandana/"
                    >
                      Lahari Chandana
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">03 Oct, 2023</p>
                    <p className="mb-0 card-text">3 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/data-science-vs-data-analytics-career/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src={DSvsDA}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="Data Science"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/data-science-vs-data-analytics-career/"
                  >
                    Data Science vs Data Analytics | Best Career Choice in 2024{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/lahari-chandana/"
                    >
                      Lahari Chandana
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">16 Mar, 2024</p>
                    <p className="mb-0 card-text">3 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp"
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="Feature image - Top Product-Based Companies for Data Scientists"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/"
                  >
                    Top Product-Based Companies for Data Scientists in 2024{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/jaishree/"
                    >
                      Jaishree Tomar
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">26 Mar, 2024</p>
                    <p className="mb-0 card-text">4 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="post-card trending-card">
              <div className="card border-0 shadow-sm position-relative">
                <a
                  href="https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/"
                  className="card-img-top"
                >
                  <img
                    width="300"
                    height="200"
                    src={LearnDS}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="How Long Would It Take to Learn Data Science"
                    decoding="async"
                  />{" "}
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href="https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/"
                  >
                    &lt;strong&gt;How Long Would It Take to Learn Data
                    Science?&lt;/strong&gt;{" "}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>&nbsp;
                    <a
                      className="text-decoration-none"
                      href="https://www.guvi.in/blog/author/meghana/"
                    >
                      Meghana D
                    </a>
                  </p>
                  <div
                    id="card-footer"
                    className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
                  >
                    <p className="mb-0 card-text">20 Oct, 2023</p>
                    <p className="mb-0 card-text">4 Min Read </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataScience;
