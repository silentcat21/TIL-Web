import React, { Component } from 'react';
import { TechList } from './Shared/TechList/TechList';
import { SiteList } from './Shared/SiteList/SiteList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div>
          <h1>안녕하세요 리액트</h1>
        </div>

        <div className="row">
        <div className="col-md-6">
          <h3><i className="fa fa-wrench"></i>현재 사이트에서 사용된 기술 리스트</h3>
          <TechList></TechList>
        </div>
        <div className="col-md-6">
        <h3><i className="fa fa-sitemap"></i>현재 사이트와 관련된 추천 사이트</h3>
          <SiteList></SiteList>
        </div>
        </div>
        
      </div>
    );
  }
}
