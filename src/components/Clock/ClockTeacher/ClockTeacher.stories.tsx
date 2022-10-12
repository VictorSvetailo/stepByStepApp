import {ClockTeacher} from './ClockTeacher';


export default {
    title: 'ClockTeacher',
    component: ClockTeacher,
}


export const ClockTeacherAnalogExample = () => {
    return <ClockTeacher mode={'analog'}/>
}

export const ClockTeacherDigitalExample = () => {
    return <ClockTeacher mode={'digital'}/>
}