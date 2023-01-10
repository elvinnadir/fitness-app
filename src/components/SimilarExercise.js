import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercise = ({ muscleExercise, equipmentExercise }) => {
  return (
    <Box
      sx={{ mt: { lg: '100px', xs: '0' } }}
    >
      {/* MUSCLE EXERCISES */}
      <Typography sx={{
        fontSize: { lg: '44px', xs: '25px' },
        ml: '20px'
      }}
        fontWeight={700}
        color="#000"
        mb="33px">
        Similar
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          Target Muscle
        </span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {muscleExercise.length ? <HorizontalScrollbar data={muscleExercise} /> : <Loader />}
      </Stack>

      {/* equipment exercises */}
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercise.length ? <HorizontalScrollbar data={equipmentExercise} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercise
