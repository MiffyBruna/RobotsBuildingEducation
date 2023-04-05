
import { Spinner } from 'react-bootstrap';
import roxanabrand from '../../common/media/images/roxanabrand.gif';
import roxanaGif from '../../common/media/images/roxanaGif.gif';
export let BossModeGPT = ({ patreonObject, promptSelection, loadingMessage }) => {

  console.log("patreon object in boss mode", patreonObject);

    let RoxanaLoadingAnimation = () => {
    return (
      <div>
        <Spinner animation="grow" variant="info" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <img width="150px" src={roxanaGif} />
        <Spinner animation="grow" variant="primary" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  }

  if(loadingMessage){
    return <RoxanaLoadingAnimation />
  }

  return(

    <div>

      
    
    <img src={roxanabrand} width={200}/>
    { promptSelection === 'patreon' ? <div> ok </div> : null} 


    { promptSelection === 'guide' ? <div> ok II </div> : null} 

    { promptSelection === 'shop' ? <div> ok III </div> : null} 
    </div>

  )
}