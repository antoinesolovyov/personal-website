import React from 'react'
import Grid from '../Grid/Grid';
import Select from '../Select/Select';

import './Videos.css'

const Videos = () => {
  return (
    <>
      <div className='select'>
        <Select options={[{ name: 'Dates' }, { name: 'Countries' }]} activeOption={{ name: 'Dates' }} />
      </div>
      <div className='grid'>
        <Grid itemData={itemData} itemType={'video'} />
      </div>
    </>
  )
}

const itemData = [
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
  {
    src: '/videos/1.mp4',
    title: 'first'
  },
];


export default Videos
