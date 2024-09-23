import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled component using MUI's styling
const StyledButton = styled(Button)(({ theme, customcolor, width }) => ({
    backgroundColor: customcolor,
    color: theme.palette.common.white,
    width: width || '100%', // Set default width to 100% or use the provided width
    '&:hover': {
        backgroundColor: customcolor, // Maintain the same color on hover for simplicity
        opacity: 0.9, // Slightly change opacity on hover
    },
}));

const ProceedButton = ({ color, onClick, width }) => {
    // const { isAuthenticated } = useAuth();
    const handleClick = (e, func) => {
        e.preventDefault();
        // if (!isAuthenticated) return;
        func();
    };

    return (
        <StyledButton
            variant="contained"
            type={'submit'}
            customcolor={color}
            onClick={(e) => handleClick(e, onClick)}
            width={width}
        >
            Proceed
            {/* {isAuthenticated ? (
                'Proceed'
            ) : (
                <Link to="/login">
                    Login Required
                </Link>
            )} */}
        </StyledButton>
    );
};

export default ProceedButton;
