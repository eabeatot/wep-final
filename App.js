import './App.css';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [datas, setDatas] = useState(data);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  function hovering(i, check) {
    let copy = [...datas];
    copy[i].hover = check;
    setDatas(copy);
  }

  return (
    <div className='main'>
      <div className="black-nav">
        <h3>All about books</h3>
      </div>
      <div className='list-grid'>
        {
          datas.map(function (row, i) {
            return (
              <div className="list">
                <div
                  onMouseOver={() => {
                    hovering(i, true);
                  }}
                  onMouseOut={() => {
                    hovering(i, false);
                  }}
                  className='main-img'>{row.img}
                  <div className='hover'>
                    {row.hover ?
                      <div>
                        <div
                          onClick={() => {
                            modal ? setModal(false) : setModal(true);
                            setIndex(i);
                          }} className='hover-img'>{row.img}</div>
                      </div>
                      : ''}
                  </div>
                  <div className='hover-text'>
                    {row.hover ?
                      <div onClick={() => {
                        modal ? setModal(false) : setModal(true);
                        setIndex(i);
                      }}>
                        {row.hovertext.split("\n").map((line) => {
                          return (
                            <span>
                              {line}
                              <br />
                            </span>
                          );
                        })}
                      </div>
                      : ''}
                  </div>
                </div>
                <div className="title">{row.title}</div>
                <div className="author">{row.author}</div>
              </div>
            )
          })
        }
      </div>
      {
        modal ? <Modal modal={modal}
          setModal={setModal}
          datas={datas}
          setDatas={setDatas}
          index={index}
        ></Modal> : ''
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className='modal-img'>
          {props.datas[props.index].img}
        </div>
        <div className='modal-text'>
          <div className="modal-title">
            {props.datas[props.index].title}
          </div>

          <div className="modal-author">
            {props.datas[props.index].author}
          </div>

          <div>
            {props.datas[props.index].like}
          </div>
          <div className='modal-sentence'>
            {props.datas[props.index].sentence.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </div>

          <div className="modal-contents">
            {props.datas[props.index].content.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </div>

          <button className="modal-button" onClick={() => {
            props.modal ? props.setModal(false) : props.setModal(true);
          }}>확인</button>
        </div>
      </div>
    </div>
  )
}
export default App;
