import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';



const Exercises = ({ setExercises, bodyPart, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisePage = 9;

    const LastExercisePage = currentPage * exercisePage;
    const FirstExercisePage = LastExercisePage - exercisePage;

    const currentExercise = exercises.slice(FirstExercisePage, LastExercisePage)

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1000, behavior: 'smooth' });
    }

    useEffect(() => {
        const fetchExerciseData = async () => {
            let exerciseData = []
            if (bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions);
            } else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions);
            }
            setExercises(exerciseData);
        }
        fetchExerciseData();
    }, [bodyPart, setExercises]);


    return (
        <Box id="exercises"
            sx={{ mt: { lg: '110px' } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h4" mb="45px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}
                flexWrap='wrap' justifyContent='center'
            >
                {currentExercise.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        exercise={exercise}
                    />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        count={Math.ceil(exercises.length / exercisePage)}
                        color="primary"
                        shape="rounded"
                        defaultPage={1}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
