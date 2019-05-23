import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import PageSlider from '../../components/pageSlider';
import BlogItem from './blogItem';
import Footer from '../../components/footer';
import blogConfig from '../../../site_config/blog';
import { getLink } from '../../../utils';
import axios from 'axios';

class Blog extends Language {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    };
  }

  componentWillMount(){
    axios.get("http://localhost:8081/article").then(
      res => {
        const items = res.data.data;
        //const items = JSON.stringify( res.data.data)
        this.setState({items});
        console.log(this.state.items);
      }
    )

  }

  render() {
    const language = this.getLanguage();
    const dataSource = blogConfig[language];
    const blogs = dataSource.list;
    console.log(this.state.items);
    return (
      <div className="blog-list-page">
      
        <Header
          type="normal"
          currentKey="blog"
          logo="/img/dubbo_colorful.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="/img/system/blog.png" text={dataSource.barText} />
        <section className="blog-container">
          <div className="col col-18 left-part">
            <PageSlider pageSize={5}>
            {
              this.state.items.map((item, i) => (
                <BlogItem key={i} dataSource={item} />
              ))
            }
            </PageSlider>
          </div>
          <div className="col col-6 right-part">
            <h4>{dataSource.postsTitle}</h4>
            <ul>
            {
              this.state.items.map((item, i) => (
                <li key={i}><span>{item.writer}&nbsp;&nbsp;</span><span>{item.title}</span></li>
              ))
            }
            </ul>
          </div>
        </section>
        <Footer logo="/img/dubbo_gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Blog />, document.getElementById('root'));


export default Blog;
