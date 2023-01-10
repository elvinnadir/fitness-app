import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

import Detail from '../components/Detail'
import SimilarExercise from '../components/SimilarExercise'
import ExerciseVideo from '../components/ExerciseVideo'


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState([])
    const [exerciseVideo, setExerciseVideo] = useState([])

    const [muscleExercise, setMuscleExercise] = useState([])
    const [equipmentExercise, setEquipmentExercise] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions)
            setExerciseVideo(exerciseVideoData.contents)

            const muscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setMuscleExercise(muscleExerciseData)


            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercise(equipmentExerciseData)
        }
        fetchExerciseData()
    }, [id])

    if (!exerciseDetail) return <div>No Data</div>;


    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
            <SimilarExercise
                muscleExercise={muscleExercise}
                equipmentExercise={equipmentExercise}
            />
        </Box>
    )
}

export default ExerciseDetail
