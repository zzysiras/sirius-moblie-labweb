import React from 'react';
import { autobind } from 'core-decorators';
import { getLink } from '../../../utils';
import './blogItem.scss';
import './index.scss';
import axios from 'axios';


@autobind
class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: true,
      items:[]
    };
  }

  /*componentWillMount(){
    axios.get("http://localhost:8081/article").then(
      res => {
        const items = res.data.data;
        //const items = JSON.stringify( res.data.data)
        this.setState({items});
        console.log(this.state.items);
      }
    )
  }*/

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

  render() {
    const { dataSource } = this.props;
    const {title, writer, id, content, type} = dataSource
    //const { link, target, title, author, companyIcon, companyIconHover, dateStr, desc } = dataSource;
    const { isHovered } = this.state;
    const article = []
    //this.state.items.map((item,i)=>{
      article.push(
        <a 
        href={'/zh-cn/blog/blog.html?id='+id}
        //target={target || '_self'}
        className="blog-item"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >   
        <div className="title">
          <img src={isHovered ? getLink('/img/system/docs_hover.png') : getLink('/img/system/docs_normal.png')} />
          <span>{title}</span>
        </div>
        <div className="brief-info">
          <span className="author">{writer}</span>
          {
            //companyIcon ? <img src={isHovered ? getLink(companyIconHover) : getLink(companyIcon)} /> : null
          }
          <span className="date">{type}</span>
        </div>
        <p>{content}</p>
      </a>
      )
      
    //})

    return ( 
      <div>{article}</div>
    );
  }
}

export default BlogItem;
