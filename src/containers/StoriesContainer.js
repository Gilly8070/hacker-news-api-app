import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContatinerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, [])

    return (
        <React.Fragment>
            <GlobalStyle />
            <StoriesContainerWrapper data-tested='stories-container'>
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map(storyId => (
                <Story key={storyId} storyId={storyId} />
                ))}
            </StoriesContainerWrapper>
        </React.Fragment>   
    )
}
