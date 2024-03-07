import React from 'react';
import './Column.css';

const Column = () => {
  return (
    <>
      <div className="column-box">
        <div className="column-box-img">
          <p className="column-box-img-datetime">
            <span className="column-box-img-text-span">2021.05.17</span>
            <span className="column-box-img-text-span">23:25</span>
          </p>
        </div>
        <div className="column-box-img-meaning">
          <p className="column-box-img-meaning-content">
            魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
          </p>
        </div>
        <div className="column-box-img-hashtag">
          <p className="column-box-img-hashtag-content">#魚料理 #和食 #DHA</p>
        </div>
      </div>
    </>
  );
};

export default Column;
