import React, { useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function TagCategory() {
    const [categories, setCategories] = useState([]);
    // console.log("🚀 ~ file: TagCategory.jsx ~ line 7 ~ TagCategory ~ categories", categories)

    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log("🚀 ~ file: TagCategory.jsx ~ line 11 ~ useEffect ~ token ****", token)
        const tokenId = localStorage.getItem("user");
        // console.log("🚀 HALOOOOOOO tokenId", JSON.parse(tokenId))
        const parsedTokenId = JSON.parse(tokenId).id;
        // console.log("parsed", parsedTokenId)

        var config = {
            method: "get",
            url: `http://localhost:2046/api/user1/${parsedTokenId}`,
            header: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios(config)
        .then(function (response) {
            console.log('IS IT WORKING???')
            setCategories(response.data.userFound.Categories)
            // setCategories(response.data)
            // console.log("🚀 ~ file: TagCategory.jsx ~ line 19 ~ setCategories ++++++", setCategories)
        })
        .catch(function (error) {})
    }, [])



        // // GET ID OF CATEGORY TAG 
        // const [categoryTag, setCategoryTag] = useState([]);
        // const { id } = useParams();
    
        // useEffect(() => {
        //     var config = {
        //         method: "get",
        //         url: `http://localhost:2046/api/category/${id}`
        //     };
    
        //     axios(config)
        //         .then(function (response) {
        //             setCategoryTag(response.data.categoryFound)
        // console.log("🚀 ~ BRUUUUH", setCategoryTag)
        //         })
        //         .catch(function (error) {
        //             console.log("CATEGORYHOME get tag")
        //         });
        // }, [id])
    // console.log("state tag", categoryTag)

    return (
        <>
            <div className="categoriesContainer">
                {categories.map((category, i) => (

                    <div
                    key={i} 
                    className="categoriesContainer_categoryContainer">
                        <Link to={`/categoryhome/${category.id}`}>
                        <p>{category.categoryName} </p>

                        </Link>

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
// console.log("🚀 ~ file: TagCategory.jsx ~ line 7 ~ TagCategory ~ categories", categories)

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
// console.log("🚀 ~ file: TagCategory.jsx ~ line 19 ~ setCategories", setCategories)
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
