import React, {  PureComponent } from 'react';

class Article extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }

        // console.log(props)

        // this.handleClick = handleClick.bind(this)
    }

    UNSAFE_componentWillMount() {
        console.log('mounting')
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     // console.log('~~~~~', 'will receive props')
    //     if (nextProps.open !== this.props.open) this.setState({
    //         isOpen: nextProps.open
    //     })
    // }

    UNSAFE_componentWillUpdate(){
        console.log('~~~~~', 'will update')
    }

    // in PureComponent not needed shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.isOpen !== nextState.isOpen
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('~~~~~', 'componentDidUpdate');
    //     console.log('componentDidUpdate prevProps', prevProps);
    //     console.log('componentDidUpdate prevState', prevState);
    // }

    // state = {
    //     isOpen: props
    // }

    // handleClick = () => {
        // this.setState({isOpen: !this.state.isOpen})
    // }

    incrementCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    render(){
        const {article, isOpen, onButtonClick} = this.props;
        
        const body = isOpen ?  <section className="card-text">{article.text}</section> : null;

        return(
            <div className="card" style={{width: '50%'}}>
                <div>
                    <h2 className="card-header" onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button className="btn btn-primary btn-lg float-right" onClick={onButtonClick}>{isOpen ? 'Close' : 'Open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">create date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }
} 

// function Article (props) {

//     const {article} = props;

//     const body = <section>{article.text}</section>
//     return (
        
//     )
// }

// function handleClick (){
//     console.log('~~~~~', 'clicked')
// }

export default Article;