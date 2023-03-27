import React, {useState} from 'react';

function FetchData() {
    const [repoName, setRepo] = useState(null); 
    const handleClick = () => {
        fetch( 'https://github.com/ponson0521?tab=repositories',
        {method:"GET", 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
        })
        .then(res => res.json())
        .then(data => {
            /*接到request data後要做的事情*/
            setRepo({repoName: data[0]['name']});
        })
        .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
        })
    }
    return (
        <div>
            <div >
            {(repoName===null) ? "沒有資料": repoName}
            </div>
            <button onClick={handleClick}>取得資料</button>
        </div>
    );
}

export default FetchData;
