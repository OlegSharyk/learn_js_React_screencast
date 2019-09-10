import React, {PureComponent} from 'react';
import Article from '../Article';
import './styles.css'

class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }

    handleClick = (openArticleId) => 
        this.setState({openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId})
        
    

    render(){
        const articleElements = this.props.articles.map((article, index) => 
            <li key={article.id} className="article-list__li">
                <Article 
                    article={article} 
                    isOpen = {this.state.openArticleId === article.id} 
                    onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
            )
        return (
        <ul className="article-list">
            {articleElements}   
        </ul>
    )
    }
}

export default ArticleList;