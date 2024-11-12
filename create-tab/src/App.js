import logo from './logo.svg';
import './App.css';
import { tabs } from './Tab';
import { useState } from 'react';

function App() {

    let [activeTab, setActiveTab] = useState(0);
    let [activeContent, setActiveContent] = useState(tabs[0]);

    let changeData = (index)=>{
        setActiveTab(index);
        setActiveContent(tabs[index])
    }
    return (
        <div className="App">
            <div className='tabsOuter'>
                <h1 style={{textAlign:'left'}}>University Vision, Mission & Values</h1>
                <ul>
                    {tabs.map( (tabsItem, index)=>{
                        return(
                          <li>
                                <button onClick={ ()=>changeData(index)} className={activeTab == index?'activeButton': ''}>{tabsItem.title}</button>
                          </li>
                        )
                    })}
                </ul>

                { (activeContent != undefined) ?
                    <p>{activeContent.description} </p>
                : 
                    ''
                }
            </div>
        </div>
    );
}

export default App;
