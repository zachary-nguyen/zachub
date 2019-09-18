import React from 'react'

function Home (){

    return(
        <div className={'main'}>
            <div id={'content'} className={'content'}>
                <h1>Zachary Nguyen</h1>
                <h2>Software Engineer Student</h2>
                <a href="#" className="btn-rounded-white">Download Resume</a>
            </div>
            <div className={'overlay'}/>
            <div id="lead-down">
            <span>
                <i className={'fa fa-chevron-down'} aria-hidden="true"></i>
            </span>
            </div>
        </div>
    )
}

export default Home;