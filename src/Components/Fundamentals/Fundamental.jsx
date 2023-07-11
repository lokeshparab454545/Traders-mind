import React, { useEffect, useState } from 'react'
import './Fundamental.css'
import 'remixicon/fonts/remixicon.css'

const Fundamental = () => {
    const [allStock, setAllStock] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterStocks, setFilterStocks] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getAllStockData = async () => {
            const stockResponse = await fetch("https://api.stockmarketapi.in/api/v1/allstocks?token=1ccb89ebca01f6564748fab7868488b0d96409bf894217686ba124d7356686c9");
            const stockData = await stockResponse.json();
            setAllStock(stockData?.data);
            setFilterStocks(stockData?.data);
        }
        getAllStockData();
    }, []);
    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= allStock.length / 15 && selectedPage !== page)
            setPage(selectedPage);
    }
    const openInNewTab = (stockNSE) => {
        const url = "https://www.screener.in/company/" + stockNSE + "/consolidated/";
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    const filterData = (searchText, allStock) => {
        const filterContact = allStock.filter((data) => data.CompanyName.toLowerCase().includes(searchText.toLowerCase()));
        setFilterStocks(filterContact);
        setPage(1);
        return filterContact;
    }
    const searchData = (searchText, allStock) => {
        if (searchText != "") {
            const data = filterData(searchText, allStock);
            setFilterStocks(data);
        }
        else {
            setFilterStocks(allStock);
        }
    }
    if (!filterStocks || !filtefilterStocksrData.length) {
        return;
    }
    return (
        <section className='fundamentals' id='fund'>
            <div className="container fundamental-wrapper">
                <h1>Fundamental Analysis</h1>
                <p>Get all the fundamental data of any company</p>

                <div className="stock-search">
                    <input type="text" placeholder='Search a Stock Name' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => searchData(searchText, allStock)}>Search</button>
                </div>
                <table className='stock-table'>
                    <tbody>
                        <tr>
                            <th>Stocks Name</th>
                            <th>Current Price</th>
                            <th>High / Low</th>
                            <th>Link</th>
                        </tr>
                        {
                            filterStocks.slice(page * 15 - 15, page * 15).map((stock, index) => (
                                <tr key={index}>
                                    <td className='stock-name'>{stock.CompanyName}</td>
                                    <td className='align'>{Math.round(stock.ltp)} Rs.</td>
                                    <td className='align'>{Math.round(stock.TodayHigh)} / {Math.round(stock.TodayLow)}</td>
                                    <td className='align' onClick={() => openInNewTab(stock.NSECode)}><i className="ri-external-link-line"></i></td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <div className="arrow">
                    <div className="icon" onClick={() => selectPageHandler(page - 1)}>
                        <i className="ri-arrow-left-s-fill"></i>
                    </div>
                    <div className="icon" onClick={() => selectPageHandler(page + 1)}>
                        <i className="ri-arrow-right-s-fill"></i>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Fundamental
