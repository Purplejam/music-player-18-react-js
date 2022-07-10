type EqualizerType = {
	isPlaying: boolean,
	colors: string[]
}

function Equalizer({colors, isPlaying}: EqualizerType){

	return(
		<div className={`equalizer ${isPlaying ? " " : "deactivated"}`}>
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
	</div>)
}


export default Equalizer;