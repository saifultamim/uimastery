// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [modal, setModal] = useState(false);
//   const handleClick = () => {
//     console.log("handleClick");
//     setModal(!modal);
//   };
//   return (
//     <div className="w-11/12 mx-auto mt-6">
//       <p>this is modal</p>
//       <button onClick={handleClick} className="border border-black">
//         modal
//       </button>

//       {modal && (
//         <div>
//           <p>modal open</p>
//         </div>
//       )}
//     </div>
//   );
// }

import Modal from "@/features/modal/Modal";
import React from "react";

const page = () => {
  return (
    <div>
      <Modal></Modal>
    </div>
  );
};

export default page;
