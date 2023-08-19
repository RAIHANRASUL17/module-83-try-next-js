"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlogs = ({params, searchParams}) => {
    const [year, id] = params.segments || []
    // console.log(year, id)
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    console.log(params2.segments ,searchParams2.get("title"))
    
    return (
        <div>
            singleBlogs = {year || new Date().getFullYear()} for {id};
            <br />
            {
                searchParams.title
            }
        </div>
    );
};

export default SingleBlogs;