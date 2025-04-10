"use client";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";

const RangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Fragment>
      <div className="___">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("thumb__ thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb__ thumb--zindex-4"
        />

        <div className="slider">
          <div className="tracker">
            <div className="slider__track" />
            <div ref={range} className="slider__range" />
          </div>
          <p className="amount">
            Price{" "}
            <span>
              ${minVal} - ${maxVal}
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const PriceRange = () => {
  return (
    <RangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
  );
};
export default PriceRange;
