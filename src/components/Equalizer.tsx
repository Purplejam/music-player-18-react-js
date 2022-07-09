import {memo} from 'react';

function Equalizer({colors, isPlaying}: any){


	const Vertical = memo(function({animationTime}: any) {
				const styles = {
					'animation': `equalizer ${animationTime}s ease infinite`,
					'animationDirection': 'alternate-reverse',
				}
			return (
				<div className="vertical" style={styles}>	
				</div>
				)
		})

	let verticalArray = [];
	let randomAnimation = [];

	for(let i = 0; i < 10; i++) {
		randomAnimation.push(Math.random() * (3 - 0.3) + 0.5);
		verticalArray.push(<Vertical key={i} animationTime={randomAnimation[i]}/>);
	}

	return(
		<div className="equalizer">
      {isPlaying && (<>
      	<div className="horizontal" style={{'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}>
       </div>
	      <div className="vertical-lines">
	      	<div className="vertical" style={{'animation': `equalizer 2.2s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 2.9s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 2.1s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 3.1s ease infinite`,
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 2.4s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 2.5s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 0.8s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 3.1s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 1.6s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      	<div className="vertical" style={{'animation': `equalizer 1.3s ease infinite`, 
	      	'background': `linear-gradient(to top, ${colors[0]},${colors[1]})`}}></div>
	      </div>
	      </>
	      )}
	</div>)
}


export default Equalizer;