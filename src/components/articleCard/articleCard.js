import React, { Component } from 'react';
import './articleCard.scss';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from '../../assets/images/avatar.png'
import uuidv4 from 'uuid/v4';
import _ from 'lodash';
import { deleteArticleAction } from '../../actions/deleteArticleAction'
import { updateArticleAction } from '../../actions/updateArticleAction';

class Articlecard extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
        this.update = this.update.bind(this)
    }
    delete(id) {
        this.props.dispatch(deleteArticleAction(id, this.props.articleList));
    }
    update(id, isRead) {
        let data = {
            isRead: !isRead
        }
        this.props.dispatch(updateArticleAction(id, data));
    }

    render() {
        const { data } = this.props;
        return (
            <div className="article-item">
                <div className="author-profile">
                    <div className="author-img">
                        <img src={Avatar} />
                    </div>
                    <div className="author-info">
                        <h3>{data.author}</h3>
                        <h5>{data.email}</h5>
                        <h4>{data.jobTitle}</h4>
                    </div>
                </div>
                <div className="article-detail">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
                <div className="tags">
                    {
                        _.map(data.tags, (tag) => (
                            <h5>{tag}</h5>
                        ))
                    }
                </div>
                <div className="action-btn">
                    <div className="delete-btn" onClick={() => this.delete(data.id)}>
                        <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" >
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Content-Management" transform="translate(-1201.000000, -484.000000)" fill="#FF6D4A" fill-rule="nonzero">
                                    <g id="users" transform="translate(159.000000, 449.000000)">
                                        <g id="user-1">
                                            <g id="delete" transform="translate(1042.000000, 35.000000)">
                                                <path d="M20.4140625,2.90929688 L14.8242188,2.90929688 L14.8242188,1.40625 C14.8242188,0.6328125 14.1914062,0 13.4179688,0 L7.55859375,0 C6.78515625,0 6.15234375,0.6328125 6.15234375,1.40625 L6.15234375,2.90929688 L0.5859375,2.90929688 C0.263671875,2.90929688 0,3.17296875 0,3.49523438 L0,3.72960938 C0,4.051875 0.263671875,4.31554688 0.5859375,4.31554688 L1.76219531,4.31554688 L1.76219531,19.5941484 C1.76219531,20.3673516 2.39500781,21 3.16844531,21 L17.7465703,21 C18.5200078,21 19.1528203,20.367375 19.1528203,19.5941484 L19.1528203,4.31554688 L20.4140625,4.31554688 C20.7363281,4.31554688 21,4.051875 21,3.72960938 L21,3.49523438 C21,3.17296875 20.7363281,2.90929688 20.4140625,2.90929688 Z M7.55859375,1.40878125 C7.55935789,1.40787647 7.56019678,1.40703758 7.56110156,1.40627344 L13.4154375,1.40627344 L13.4154375,1.40625 C13.4163047,1.40697656 13.4172187,1.40789063 13.4179687,1.40878125 L13.4179687,2.90929688 L7.55859375,2.90929688 L7.55859375,1.40878125 Z M3.16844531,19.5941484 L3.18016406,4.31732812 L6.15234375,4.31732812 L6.15234375,4.31735156 L14.8242188,4.31735156 L14.8242188,4.31732812 L17.7348516,4.31732812 L17.7465703,19.5941484 L3.16844531,19.5941484 Z" id="Shape"></path>
                                                <path d="M13.0043832,6.39130435 C12.6241852,6.39130435 12.3131141,6.69631617 12.3131141,7.0691084 L12.3131141,16.670022 C12.3131141,17.0428143 12.6241852,17.3478261 13.0043832,17.3478261 C13.3845811,17.3478261 13.6956522,17.0428143 13.6956522,16.670022 L13.6956522,7.0691084 C13.6956522,6.69631617 13.3845811,6.39130435 13.0043832,6.39130435 Z M8.90866032,6.39130435 C8.52846236,6.39130435 8.2173913,6.69631617 8.2173913,7.0691084 L8.2173913,16.670022 C8.2173913,17.0428143 8.52846236,17.3478261 8.90866032,17.3478261 C9.28885828,17.3478261 9.59992934,17.0428143 9.59992934,16.670022 L9.59992934,7.0691084 C9.59992934,6.69631617 9.28885828,6.39130435 8.90866032,6.39130435 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {
                        !data.isRead ? <div className="mark-btn" onClick={() => this.update(data.id, data.isRead)}>
                            <p >Mark as Read</p>
                        </div> : ''
                    }
                </div>
                {
                    !data.isRead ? <div className="unread-dot"></div> : ''
                }
            </div>
        )
    }
}

export default withRouter(connect((store) => {
    return {
        deleteArticle: store.deleteArticle.deleteArticle,
        articleList: store.articleList.articleList,
    };
})(Articlecard))
