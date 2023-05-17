import { styled } from '@mui/system'

export const Activision = styled('div')({
    top: 0,
    bottom: 0,
    left: 0,
    width: "20px",
    height: "80vh",
    margin: 'auto 0',
    backgroundColor: "transparent",
    cursor: 'pointer',
    position: 'absolute',
    zIndex: "1000 !important"
});

export const Shadow = styled('div')({
    position: 'absolute',
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    top: 0,
    bottom: 0,
    zIndex: 2
});

export const Container = styled('div')({
    position: 'sticky',
    top: 0,
    bottom: 0,
    width: 'auto',
    zIndex: 10
});

export const Line = styled('div')(({ theme }) => ({
    position: 'absolute',
    height: '90%',
    top: '10px',
    width: '1px',
    backgroundColor: 'rgba(191, 191, 191, 0.25)',
    left: '27px'
}));