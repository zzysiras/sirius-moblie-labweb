import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Slider from '../../components/slider';
import Footer from '../../components/footer';
import axios from 'axios';
//import Player from './MyVideo'
import Player from './playitem';
import './index.scss';
import '../../../node_modules/swiper/dist/css/swiper.css';

class Community extends Language {

  constructor(props) {
    super(props);
    this.state = {
      items:[]
    };
    axios.get("http://localhost:8081/demo/videolist").then(
      res => {
        const items = res.data.data;
        //const items = JSON.stringify( res.data.data)
        this.setState({items});
        console.log(this.state.items);
      }
    )

  }


  /*componentWillMount(){
    axios.get("http://localhost:8081/demo/videolist").then(
      res => {
        const items = res.data.data;
        //const items = JSON.stringify( res.data.data)
        this.setState({items});
        console.log(this.state.items);
      }
    )

  }*/

  render() {
    const language = this.getLanguage();
    //const dataSource = communityConfig[language];
    const dataSource = this.state;
    const state = this.state.items;
    console.log(state);
    return (

      <div className="community-page">
      
        <Header
          currentKey="community"
          type="normal"
          logo="/img/dubbo_colorful.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="/img/system/community.png" text="团建板块" />
        <section className="events-section">
          <h3>实验室生活的点点滴滴</h3>
          <Slider>
            {this.state.items.map((item, i) => (
              <Player key={i} dataSource={item} />
            ))}
          </Slider>
        </section>
        <Footer logo="/img/dubbo_gray.png" language={language} />
      </div>
    );
  }

  
}

document.getElementById('root') && ReactDOM.render(<Community />, document.getElementById('root'));

export default Community;
