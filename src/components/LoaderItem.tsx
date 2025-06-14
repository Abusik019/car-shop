import { CSSProperties } from "react";
import { BarLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

function LoaderItem() {
  return (
    <div className="w-full h-[154px] flex items-center justify-center">
      <BarLoader
        color="#000000"
        loading={true}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoaderItem;