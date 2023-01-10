import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';



const Footer = () => {
    return (
        <Box mt='80px' bgColor="#fff3f4">
            <Stack gap="40px" px="40px" pt="24px" alignItems="center">
                <img src={Logo} alt="logo" width="200px" height="40px" />
                <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
                    Made with ❤️ by Elvin Nadir
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer
