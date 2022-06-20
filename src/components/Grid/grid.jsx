import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Grid = ({ itemData, itemType }) => {
  return (
    <Box sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={5} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.src}>
            {itemType === 'photo'
              ? (
                <img
                  src={`${item.src}?auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              ) : (
                <video width={'100%'} controls>
                  <source src={process.env.PUBLIC_URL + item.src + '?auto=format'} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            }
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Grid
