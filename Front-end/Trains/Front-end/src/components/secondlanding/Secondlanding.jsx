
import {Navbar} from '../Navbar/Navbar';
//import {Secondsearch} from '../secondsearch/Secondsearch'
import {Secondtrainfilters} from '../secondpagefilters/Secondtrainfilters'
const Secondlanding = ({data,sourceTrain,destTrain})=>{

    return(
        <>
        <Navbar/>
        <Secondtrainfilters data={data} sourceTrain={sourceTrain} destTrain={destTrain}/>
        </>
    )
}

export {Secondlanding}