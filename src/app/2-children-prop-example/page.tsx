import Child from "@/components/children/Child";
import Parent from "@/components/children/Parent";
import SecondChild from "@/components/children/SecondChild";
import React from "react";

const ChildrenPropExample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
