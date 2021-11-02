import "../Components/Css/Search.css"

function SearchBox(){
    return (
        <div className="flex">
           
            <div className="border border_start">
            <div className="floating-label-group">
                <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtkWGReHSyMejXT_WTXa2ipCUJj5DfqhVSIfY-_-sBXY9cqi-ducWorRKOpNBifTDM14&usqp=CAU" alt="icon"/>
			<input type="text" className="form-control" autoComplete="off" required />
			<label className="floating-label">Search By City,Hotel or Area</label>
			</div>
           </div>

           <div className="border">
            <div className="floating-label-group">
            <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmGZcO1ksv2HDnWZCe8dZcYA8MFNNGCeX6LEfGdXlJ50op3pMvKLedXuy9bc5S_r8oUg&usqp=CAU" alt="icon"/>
			<input type="date"  className="form-control" autoComplete="off" required />
			<label className="floating-label">Check In</label>
			</div>
           </div>

           <div className="border">
            <div className="floating-label-group">
            <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmGZcO1ksv2HDnWZCe8dZcYA8MFNNGCeX6LEfGdXlJ50op3pMvKLedXuy9bc5S_r8oUg&usqp=CAU" alt="icon"/>
			<input type="date" className="form-control" autoComplete="off" required />
			<label className="floating-label">Check Out</label>
			</div>
           </div>

           <div className="border">
            <div className="floating-label-group">
            <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwi3UjTtpRPBEvJKLBtlndABG88b7nCsReXzJkrddFO9-TcWBHUAv6f6vQBqKDsBsak&usqp=CAU" alt="icon"/>
			<input type="text" className="form-control" autoComplete="off" required />
			<label className="floating-label">1 Adult,0 Children,1 Room</label>
			</div>
           </div>

           <div className="border">
            <div className="floating-label-group">
            <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtkWGReHSyMejXT_WTXa2ipCUJj5DfqhVSIfY-_-sBXY9cqi-ducWorRKOpNBifTDM14&usqp=CAU" alt="icon"/>
			<input type="date" className="form-control" autoComplete="off" required />
			<label className="floating-label">Check Out</label>
			</div>
           </div>

            <button className="button_search">Search</button>
        </div>
    )
}


export default SearchBox