import "./links.css";
const Links = () => {
  return (
    <>
      <div className="pt-4 padding-left-s">
        <div className="h4">Important Links</div>
        <div className="linkers-s">
          <div className="linkers-grid-s">
            {/* 1st */}
            <div className="text-center">
              <div>
                <img
                  src="https://www.abhibus.com/trains/images/pnr-status-icon.png"
                  alt="img"
                />
              </div>
              <div>PNR Status</div>
            </div>
            {/* 2nd */}
            <div className="text-center">
              <div>
                <img
                  src="https://www.abhibus.com/trains/images/coach-icon.png"
                  alt="img"
                />
              </div>
              <div>Coach Position</div>
            </div>
            {/* 3rd */}
            <div className="text-center">
              <div>
                <img
                  src="https://www.abhibus.com/trains/images/route-icon.png"
                  alt="img"
                />
              </div>
              <div>PNR Status</div>
            </div>
            {/* 4th */}
            <div className="text-center">
              <div>
                <img
                  src="https://www.abhibus.com/trains/images/train-icon.png"
                  alt="img"
                />
              </div>
              <div>PNR Status</div>
            </div>
          </div>
          <div>
            <img
              src="https://static.abhibus.com/trains/trains-right-banner.jpg"
              alt="images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Links };
