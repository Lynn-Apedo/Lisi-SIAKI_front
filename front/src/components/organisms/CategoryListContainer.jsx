// import React, { useState, useEffect } from "react";

// import Horloge from "../atoms/Horloge";
// import imgValidate from "../../assets/icons/validate.png"
// import imgModify from "../../assets/icons/pencil.png";
// import imgDelete from "../../assets/icons/delete.png";


// import ListCard from "../molecules/ListCard";


// export default function CategoryListContainer({showModal}) {
//     let myRef;
//     useEffect(() => {
//         document.addEventListener('click',showSMTModal)
// });
//     const showSMTModal = (event) => {
//         if (myRef && !myRef.contains(event.target)) {
//             showModal();   
//         }
//     }
//      // LIST MODAL
//      const [showListModal, setShowListModal] = useState(false);
//      const handleShowListModal = () => {
//          console.log("i'm working !!!")
//          setShowListModal(true);
//      }
//      const handleCloseListModal = () => {
//          setShowListModal(false);
//      }
//     return (
//         <>
//             <div className="categoryContainer">
//                 <div className="categoryContainer_oneContainer">
//                     <div className="categoryContainer_oneContainer_inputContainer">

//                         {/* <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" />  */}
//                         <h3>nom de la catégorie clické</h3>

//                         <div className="categoryContainer_oneContainer_inputContainer_buttons">
//                             <button className="iconsButton">
//                                 <img src={imgValidate} alt="icon de validation"/>
//                             </button>
//                             <button className="iconsButton">
//                                 <img src={imgModify} alt="icon de validation"/>
//                             </button>
//                             <button className="iconsButton">
//                                 <img src={imgDelete} alt="icon de validation"/>
//                             </button>   
//                         </div>

//                     </div>

//                     <div className="categoryContainer_oneContainer_listContainer">
//                         <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
//                             <button className="addListButton" onClick={handleShowListModal}>+ ajouter une liste</button>
//                         </div>


//                         <div className="categoryContainer_oneContainer_listContainer_container">
//                             <ListCard />
//                             <ListCard />
//                             <ListCard />
//                             <ListCard /><ListCard /><ListCard />
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
