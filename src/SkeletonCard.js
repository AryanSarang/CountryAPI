import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const SkeletonCard = ({ props }) => {

    return (

        <div className="m-3 col-md-3  col-12 countryCard px-2 py-2 shadow">
            <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                <Skeleton count={7} className=" w-100" />

                <Skeleton className="my-3 w-100" />
                <Skeleton className=" w-100" direction="ltr" duration={0.5} />
                <Skeleton className="my-3 w-100" />
            </SkeletonTheme>
        </div>

    )
};

export default SkeletonCard;
