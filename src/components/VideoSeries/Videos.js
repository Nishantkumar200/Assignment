import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoSeriesList } from "../../actions/action";
import "../../styles/Video.css";
import FrequentlyAsked from "../FAQ/FrequentlyAsked";

function Videos() {
  const dispatch = useDispatch();
  const { videoSeries, lng } = useSelector((state) => state.singlePageReducer);

  console.log(videoSeries, "single");

  useEffect(() => {
    dispatch(getVideoSeriesList(lng));
  }, []);

  // calculating hours and minutes for course duration
  function convertHoursToHoursAndMinutes(hours) {
    const wholeHours = Math.floor(hours);
    const remainingMinutes = (hours - wholeHours) * 60;
    const result = `${wholeHours} hours ${Math.round(
      remainingMinutes
    )} minutes`;
    return result;
  }
  return (
    <>
      <div style={{ padding: 25 }}>
        {/* Top Banner */}
        {videoSeries && Object.keys(videoSeries).length ? (
          <>
            <div className="topHeading">{videoSeries?.details.title}</div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>
                <img
                  src={`${videoSeries?.details.thumbnail.domain}/${videoSeries?.details.thumbnail.basePath}/${videoSeries?.details.thumbnail.qualities[0]}/${videoSeries?.details.thumbnail.key}`}
                  style={{
                    width: 700,
                    height: 400,
                    objectFit: "contain",
                    borderRadius: 10,
                  }}
                />
              </div>
              <div style={{ marginLeft: 15 }}>
                <h3 className="topSubtitle">{videoSeries?.details.subtitle}</h3>
                <p className="topDescription">
                  {videoSeries?.details.description}
                </p>
              </div>
            </div>
          </>
        ) : (
          "No Details Found"
        )}

        {/* Video Series */}
        <div>
          <h5>
            {" "}
            <span>
              {lng == "english" ? "Video Series" : "वीडियो श्रृंखलाएँ "}
            </span>{" "}
            ({videoSeries?.details?.coursesCount})
          </h5>
        </div>
        <div className="grid-container">
          {videoSeries &&
          Object.keys(videoSeries).length &&
          videoSeries?.courses
            ? videoSeries?.courses.map((item, index) => (
                <>
                  <div className="grid-item">
                    <p>भाग {item.series.order.seq}</p>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <p>{convertHoursToHoursAndMinutes(item.courseHours)}</p>
                    <p>
                      Contribution: &#8377; {item.amount}{" "}
                      <span
                        style={{ textDecoration: "line-through", fontSize: 14 }}
                      >
                        &#8377;{item.originalAmount}
                      </span>{" "}
                    </p>
                    <p style={{ textTransform: "capitalize" }}>
                      {item.language}
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ textTransform: "uppercase" }} i>
                        Add to cart
                      </p>
                      <p
                        style={{
                          textTransform: "uppercase",
                          border: "none",
                          marginLeft: 20,
                          borderLeft: "1",
                          borderColor: "lightgray",
                          borderWidth: "1px",
                        }}
                      >
                        Enrol
                      </p>
                    </div>
                  </div>
                </>
              ))
            : "No Videos Available"}
        </div>
        <FrequentlyAsked />
      </div>
    </>
  );
}

export default Videos;
