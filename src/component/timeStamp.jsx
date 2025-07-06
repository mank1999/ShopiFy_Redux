import React, { useEffect, useState } from "react";

const TimeStamp = () => {
  const [timer, setTimer] = useState(69);

  useEffect(() => {
    let countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <>
      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl">
            <span
              style={{ "--value": 15 } /* as React.CSSProperties */}
              aria-live="polite"
              aria-label={"counter"}
            >
              15
            </span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span
              style={{ "--value": 10 } /* as React.CSSProperties */}
              aria-live="polite"
              aria-label={"counter"}
            >
              10
            </span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span
              style={{ "--value": 24 } /* as React.CSSProperties */}
              aria-live="polite"
              aria-label={"counter"}
            >
              24
            </span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span
              style={{ "--value": 59 } /* as React.CSSProperties */}
              aria-live="polite"
              aria-label={"counter"}
            >
              {timer}
            </span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default TimeStamp;
