import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Grid = ({ itemData }) => {
  return (
    <Box sx={{ margin: '20px', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={5} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=400&auto=format`}
              srcSet={`${item.img}?w=400&&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Grid
