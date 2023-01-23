import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizedLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizedLetter(this.props.category)} - NewsMonkey`;
    }

    async update() {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        this.props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100)
    }

    componentDidMount() {
        this.update();
    }

    fetchMoreData = async () => {
        setTimeout(async () => {
            this.setState({ page: this.state.page + 1 });
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14694d8a84be4a8f935e98a63cfba554&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults
            });
        }, 1500);
    }
        render() {
            return (
                <>
                    <h2 className='my-4 text-center'>{this.capitalizedLetter(this.props.category)} - Top Headines!</h2>
                    {this.state.loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className='container my-3'>
                            <div className='row'>
                                {this.state.articles.map((element) => {
                                    return <div className='col-md-4' key={element.url} style={{ margin: '15px auto' }}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author === null ? 'Unknown' : element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </>
            )
        }
    }

export default News
