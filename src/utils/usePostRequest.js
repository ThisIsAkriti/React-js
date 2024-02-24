import React, { useState, useEffect } from 'react';

    function usePostRequest() {
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({ title: 'React Hooks POST Request ' }),
        };

        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));
    }, []);

    return (
        <div>
        {postId && <p>Post ID: {postId}</p>}
        </div>
    );
    }

    export default usePostRequest;
