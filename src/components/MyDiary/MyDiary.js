import React from 'react'
import './MyDiary.css'

const MyDiary = () => {
    return (
        <>
          <div className="my-diary-box">
            <div className="my-diary-datetime">
              <p className="my-diary-datetime-text"><span className="my-diary-datetime-text-span">2021.05.21  </span><span className="my-diary-datetime-text-span">23:25</span></p>
            </div>
            <div className="my-diary-notes">
              <p className="my-diary-datetime-notes-content">私の日記の記録が一部表示されます</p>
              <p className="my-diary-datetime-notes-content">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…</p>
            </div>
          </div>
        </>
    )
}

export default MyDiary