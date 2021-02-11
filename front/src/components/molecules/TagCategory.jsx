import React, { useEffect , useState } from "react";
import axios from "axios";


export default function TagCategory() {
    const [categories, setCategories] = useState([]);
    console.log("🚀 ~ file: TagCategory.jsx ~ line 7 ~ TagCategory ~ categories", categories)

    useEffect(() => {
        var config = {
            method: "get",
            url: `/api/getcategories`,
            // header: {
            //     Authorization: "Bearer " + localStorage.getItem("token"),
            // },
        };
        axios(config)
        .then(function (response) {
            setCategories(response.data.categoriesFound)
            console.log("🚀 ~ file: TagCategory.jsx ~ line 19 ~ setCategories", setCategories)
        })
        .catch(function (error) {})
    }, [])

    return (
        <>
            <div className="categoriesContainer">
                {categories.map((category, i) => (

                    <div
                    key={i} 
                    className="categoriesContainer_categoryContainer">
                        <p>{category.categoryName}</p>

                    </div>



                ))}
            </div>
            
            
        </>
    )
}



// import React, { useEffect , useState } from "react";
// import axios from "axios";


// export default function TagCategory() {
//     const [categories, setCategories] = useState([]);
//     console.log("🚀 ~ file: TagCategory.jsx ~ line 7 ~ TagCategory ~ categories", categories)

//     useEffect(() => {
//         var config = {
//             method: "get",
//             url: `/api/user/${categories.id}`,
//             header: {
//                 Authorization: "Bearer " + localStorage.getItem("token"),
//             },
//         };
//         axios(config)
//         .then(function (response) {
//             setCategories(response.data.userFound)
//             console.log("🚀 ~ file: TagCategory.jsx ~ line 19 ~ setCategories", setCategories)
//         })
//         .catch(function (error) {})
//     }, [])

//     return (
//         <>
//             <div className="categoriesContainer">
//                 {categories.map((category, i) => (

//                     <div
//                     key={i} 
//                     className="categoriesContainer_categoryContainer">
//                         <p>{category.categoryName}</p>

//                     </div>



//                 ))}
//             </div>
            
            
//         </>
//     )
// }
