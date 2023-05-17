import AttractionsIcon from '@mui/icons-material/Attractions';

import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const imageToIcon = (src) => {

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <img 
                style={{ height: '80%', margin: 'auto   ' }} 
                src={src}
            />
        </div>
    )
}


const relateIconToName = (name, color = 'inherit') => {

    const refs = {
        'AssessmentOutlinedIcon': <AssessmentOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
        'AssignmentIndOutlinedIcon': <AssignmentIndOutlinedIcon sx={{ fontSize: '2.2rem' }} />,
        'SettingsOutlinedIcon': <SettingsOutlinedIcon sx={{ fontSize: '27px !important' }} />,
        'LogoutOutlinedIcon': <LogoutOutlinedIcon sx={{ fontSize: '27px !important' }} />,
    }

    if (name in refs) return refs[name]

    return <AttractionsIcon sx={{ fontSize: '2.2rem' }}/>
}

export default relateIconToName