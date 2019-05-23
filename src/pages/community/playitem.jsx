import React ,{ Component }from 'react';
import { autobind } from 'core-decorators';
import {Player,BigPlayButton,PlaybackRateMenuButton,ControlBar} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";



@autobind
class playitem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isHovered: false,
        };
        this.play = this.play.bind(this);
    
    }

    onMouseOver() {
        this.setState({
          isHovered:true,   
        });
    }

  
  
    onMouseOut() {
       this.setState({
          isHovered: false,
        });
    }

    /*shouldComponentUpdate(nextProps ,nextState){
      if(nextState.items == this.state.items){
          return false;
      }
    }*/

    play() {
      this.refs.player.play();
      //this.refs.player.setAttribute("height",400);
      console.log(this.refs);
    }

    pause() {
      this.refs.player.pause();
    }



    render(){
        const {dataSource} = this.props;
        const {id , url , videoname } = dataSource;
        const { isHovered } = this.state;
        return (
          <div onMouseEnter={this.play}
           onMouseLeave={this.pause} 
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}  >
            <Player ref="player" id={id} videoId={id} fluid={false} height={isHovered?360:350} width={isHovered?510 :500} >
            <BigPlayButton position="center" />
            <source src={"http://localhost:8081/statics" + url}/>
            <ControlBar  autoHide={true}>
          <PlaybackRateMenuButton rates={[2, 1.5, 1, 0.75, 0.5]} />
        </ControlBar>
            </Player>
            <p align="center">{videoname}</p>
          </div>
        )
    }


}

export default playitem;