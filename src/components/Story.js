import React, { useState, useEffect } from 'react';
import { mapTime } from '../mappers/mapTime';
import { getStory } from '../services/hnApi';
import { StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper } from '../styles/StoryStyles';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, [])

    return story && story.url ? (
        <StoryWrapper data-tested='story'>
            <StoryTitle>
                <a href={story.url} >
                    {story.title}
                </a>
            </StoryTitle>

            <StoryMeta>
                <span className="story_by" data-tested='story-by'>
                    <StoryMetaElement color='#000'>By: </StoryMetaElement> {story.by}
                </span>
                <span className="story_time" data-tested='story-time'>
                    <StoryMetaElement color='#000'>By: </StoryMetaElement> {mapTime(story.time)}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;
};