import React from "react";


const Header = ({money,total}) => {
    return(
        <>
        <div>
        <p> Harcanan Tutar : {total} </p>
        Harcamak için {money-total} dolar paranız var.
        </div>
        </>
    )

}

export default Header